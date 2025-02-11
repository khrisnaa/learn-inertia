<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BookingResource\Pages;
use App\Filament\Resources\BookingResource\RelationManagers;
use App\Models\Booking;
use Filament\Tables\Actions\Action;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BookingResource extends Resource
{
    protected static ?string $model = Booking::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Transactions';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make()
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('tour_id')
                                    ->label('Tour Name')
                                    ->disabled()
                                    ->dehydrated(false)
                                    ->formatStateUsing(fn($record) => $record->tour?->name),
                                TextInput::make('user_id')
                                    ->label('User Email')
                                    ->disabled()
                                    ->dehydrated(false)
                                    ->formatStateUsing(fn($record) => $record->user?->email),
                                TextInput::make('quantity'),
                                TextInput::make('total_price'),
                                TextInput::make('booking_date'),
                                TextInput::make('status')
                            ]),
                        FileUpload::make('transfer_proof')
                            ->image()
                            ->directory('transfer-proofs')
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('tour.name')
                    ->label('Tour Name')
                    ->searchable()
                    ->sortable()
                    ->limit(30),
                TextColumn::make('user.email')
                    ->label('Email')
                    ->searchable()
                    ->sortable()
                    ->limit(30),
                TextColumn::make('quantity')
                    ->label('Quantity')
                    ->searchable(),
                TextColumn::make('total_price')
                    ->label('Total Price')
                    ->getStateUsing(fn($record) => '$ ' . number_format($record->total_price ?? 0, 0, ',', '.'))
                    ->sortable(),
                TextColumn::make('booking_date')
                    ->label('Book Date')
                    ->sortable()
                    ->dateTime('d M Y'),
                TextColumn::make('status')
                    ->label('Status')
                    ->sortable(),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Action::make('manageBooking')
                    ->label('Manage Booking')
                    ->modalHeading('Manage Booking')
                    ->form(fn(Booking $record) => [
                        Select::make('status')
                            ->label('Booking Status')
                            ->options([
                                'Pending' => 'Pending',
                                'Confirmed' => 'Confirmed',
                                'Canceled' => 'Canceled',
                                'Completed' => 'Completed',
                            ])
                            ->default($record->status)
                            ->required(),

                        DatePicker::make('booking_date')
                            ->label('Booking Date')
                            ->default($record->booking_date)
                            ->required(),

                        FileUpload::make('transfer_proof')
                            ->label('Transfer Proof')
                            ->default($record->transfer_proof)
                            ->directory('transfer-proofs')
                            ->image()
                            ->nullable(),
                    ])
                    ->action(function (array $data, Booking $record) {
                        $record->update([
                            'status' => $data['status'],
                            'booking_date' => $data['booking_date'],
                            'transfer_proof' => $data['transfer_proof'] ?? $record->transfer_proof,
                        ]);

                        Notification::make()
                            ->title('Booking Updated')
                            ->body('The booking details have been successfully updated.')
                            ->success()
                            ->send();
                    })
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBookings::route('/'),
            'create' => Pages\CreateBooking::route('/create'),
            'edit' => Pages\EditBooking::route('/{record}/edit'),
            'view' => Pages\ViewBooking::route('/{record}'),
        ];
    }
}

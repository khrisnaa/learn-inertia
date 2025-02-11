<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReviewResource\Pages;
use App\Filament\Resources\ReviewResource\RelationManagers;
use App\Models\Review;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ReviewResource extends Resource
{
    protected static ?string $model = Review::class;

    protected static ?string $navigationIcon = 'heroicon-o-star';

    protected static ?string $navigationGroup = 'Transactions';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make()
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('rating')
                                    ->label('Rating')
                                    ->disabled()
                                    ->autocomplete(false)
                                    ->helperText('The rating of the tour review'),
                                TextInput::make('comment')
                                    ->label('Comment')
                                    // ->disabled()
                                    ->autocomplete(false)
                                    ->helperText('The comment of the tour review'),
                                Toggle::make('is_active')
                                    ->label('Active Status')
                                    ->default(true)
                                    ->helperText('Toggle to activate or deactivate this review status. When active, it will be visible and accessible')
                                    ->onIcon('heroicon-m-check-circle')
                                    ->offIcon('heroicon-m-x-circle'),
                                Toggle::make('is_highlight')
                                    ->label('Highlight Status')
                                    ->default(true)
                                    ->helperText('Toggle to activate or deactivate this review highlight status. When active, it will be visible and accessible in highlight section.')
                                    ->onIcon('heroicon-m-check-circle')
                                    ->offIcon('heroicon-m-x-circle'),


                            ])
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('rating')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('comment')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('is_active')
                    ->badge()
                    ->label('Active Status')
                    ->color(fn(bool $state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn(bool $state): string => $state ? 'Active' : 'Inactive')
                    ->alignCenter(),
                TextColumn::make('is_highlight')
                    ->badge()
                    ->label('Highlight Status')
                    ->color(fn(bool $state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn(bool $state): string => $state ? 'Active' : 'Inactive')
                    ->alignCenter(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListReviews::route('/'),
            'create' => Pages\CreateReview::route('/create'),
            'edit' => Pages\EditReview::route('/{record}/edit'),
        ];
    }
}

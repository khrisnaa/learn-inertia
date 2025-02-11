<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactResource\Pages;
use App\Filament\Resources\ContactResource\RelationManagers;
use App\Models\Contact;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ContactResource extends Resource
{
    protected static ?string $model = Contact::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make()
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('company_name')
                                    ->label('Company Name')
                                    ->required()
                                    ->autocomplete(false)
                                    ->helperText('Enter the name of the company'),
                                TextInput::make('city')
                                    ->label('City')
                                    ->required()
                                    ->autocomplete(false)
                                    ->helperText('Enter the name of the city'),
                                TextInput::make('country')
                                    ->label('Country')
                                    ->required()
                                    ->autocomplete(false)
                                    ->helperText('Enter the name of the country'),
                                TextInput::make('address')
                                    ->label('Address')
                                    ->required()
                                    ->autocomplete(false)
                                    ->helperText('Enter the address of the company'),
                                TextInput::make('phone')
                                    ->label('Phone')
                                    ->required()
                                    ->autocomplete(false)
                                    ->helperText('Enter the phone of the company'),
                                TextInput::make('email')
                                    ->label('Email')
                                    ->required()
                                    ->autocomplete(false)
                                    ->helperText('Enter the email of the company'),
                            ])
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('company_name'),
                TextColumn::make('city'),
                TextColumn::make('country'),
                TextColumn::make('address'),
                TextColumn::make('phone'),
                TextColumn::make('email'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageContacts::route('/'),
        ];
    }
}

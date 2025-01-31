<?php

namespace App\Filament\Resources;

use App\Models\Tour;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use App\Filament\Resources\TourResource\Pages;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Columns\ImageColumn;
use Illuminate\Database\Eloquent\Model;

class TourResource extends Resource
{
    protected static ?string $model = Tour::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                TextInput::make('name')
                    ->required()
                    ->maxLength(255)
                    ->autocomplete(false),
                TextInput::make('headline')
                    ->required()
                    ->maxLength(255)
                    ->autocomplete(false),
                TextInput::make('duration')
                    ->required()
                    ->maxLength(255)
                    ->autocomplete(false),
                TextInput::make('location')
                    ->required()
                    ->maxLength(255)
                    ->autocomplete(false),
                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->prefix('$'),
                Select::make('categories')
                    ->relationship('categories', 'name')
                    ->multiple()
                    ->preload()
                    ->searchable(),
                RichEditor::make('overview')
                    ->required()
                    ->columnSpanFull(),
                FileUpload::make('thumbnail')
                    ->required()
                    ->directory('tour-thumbnails'),
                Repeater::make('images')
                    ->relationship('images') // Relasi hasMany
                    ->schema([
                        FileUpload::make('image_url')
                            ->directory('tour-images')
                            ->image()
                            ->required(),
                    ])
                    ->columnSpanFull()
                    ->grid(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                ImageColumn::make('thumbnail'),
                TextColumn::make('duration')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('location')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('price')
                    ->money()
                    ->sortable(),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable()
            ])
            ->filters([
                //
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make()
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
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
            'index' => Pages\ListTours::route('/'),
            'create' => Pages\CreateTour::route('/create'),
            'edit' => Pages\EditTour::route('/{record}/edit'),
        ];
    }

    public static function afterCreate(Model $record, array $data): void
    {
        self::saveImages($record, $data['images']);
    }

    public static function afterUpdate(Model $record, array $data): void
    {
        self::saveImages($record, $data['images']);
    }

    protected static function saveImages(Tour $tour, array $images): void
    {
        foreach ($images as $image) {
            $tour->images()->create([
                'image_url' => $image, // Save the file path to the TourImage model
            ]);
        }
    }
}

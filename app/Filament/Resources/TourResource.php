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
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\ToggleColumn;
use Illuminate\Database\Eloquent\Model;

class TourResource extends Resource
{
    protected static ?string $model = Tour::class;

    protected static ?string $navigationIcon = 'heroicon-o-globe-asia-australia';

    protected static ?string $navigationGroup = 'Tour Packages';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Tour Details')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('name')
                                    ->label('Tour Name')
                                    ->required()
                                    ->autocomplete(false)
                                    ->placeholder('Wildlife Safari - Way Kambas')
                                    ->helperText('Enter the name of the tour'),
                                TextInput::make('location')
                                    ->label('Tour Location')
                                    ->required()
                                    ->autocomplete(false)
                                    ->placeholder('Way Kambas, Sumatra')
                                    ->helperText('Enter the location of the tour'),
                                TextInput::make('duration')
                                    ->label('Tour Duration')
                                    ->required()
                                    ->autocomplete(false)
                                    ->placeholder('2 Days 1 Night')
                                    ->helperText('Enter the duration of the tour'),
                                TextInput::make('price')
                                    ->label('Price')
                                    ->prefix('$')
                                    ->numeric()
                                    ->maxValue(100000000)
                                    ->required()
                                    ->placeholder('200')
                                    ->default(1)
                                    ->helperText('Enter the price for this tour'),
                                Textarea::make('headline')
                                    ->label('Tour Headline')
                                    ->required()
                                    ->autocomplete(false)
                                    ->placeholder('Explore the hidden wildlife gems of Sumatra’s Way Kambas National Park')
                                    ->helperText('Provide a headline of the tour'),
                                Select::make('categories')
                                    ->relationship('categories', 'name')
                                    ->multiple()
                                    ->preload()
                                    ->searchable(),
                                Toggle::make('is_recommended')
                                    ->label('Recommended Status')
                                    ->default(true)
                                    ->helperText('Toggle to activate or deactivate this tour status. When active, it will be visible and accessible in recommended section.')
                                    ->onIcon('heroicon-m-check-circle')
                                    ->offIcon('heroicon-m-x-circle'),
                                Toggle::make('is_highlighted')
                                    ->label('Highlighted Status')
                                    ->default(true)
                                    ->helperText('Toggle to activate or deactivate this tour status. When active, it will be visible and accessible in highlighted section.')
                                    ->onIcon('heroicon-m-check-circle')
                                    ->offIcon('heroicon-m-x-circle')
                            ]),
                        FileUpload::make('thumbnail')
                            ->label('Tour Thumbnail')
                            ->image()
                            ->directory('tour-thumbnails')
                            ->required()
                            ->helperText('Upload the image for the tour'),

                        RichEditor::make('overview')
                            ->label('Tour Overview')
                            ->required()
                            ->helperText('Provide a detailed overview description of the catalog')
                            ->placeholder('Explore spot Sumatran elephants, tigers, and rhinos in their natural habitat.')
                            ->columnSpanFull(),
                    ]),
                Section::make("Tour Images")
                    ->schema([
                        Repeater::make('images')
                            ->relationship('images')
                            ->schema([
                                FileUpload::make('image_url')
                                    ->label('Image')
                                    ->disk('public')
                                    ->directory('tour-images')
                                    ->required()
                                    ->helperText('Upload additional tour images'),
                            ])
                            ->columns(1)
                            ->label('Tour Image'),
                    ]),
                Section::make('Tour Includes & Highlights')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                Repeater::make('includes')
                                    ->relationship('includes')
                                    ->schema([
                                        TextInput::make('include_item')
                                            ->required()
                                            ->maxLength(255)
                                            ->autocomplete(false)
                                    ]),
                                Repeater::make('highlights')
                                    ->relationship('highlights')
                                    ->schema([
                                        TextInput::make('highlight_item')
                                            ->required()
                                            ->maxLength(255)
                                            ->autocomplete(false)
                                    ])
                            ])
                    ])
                // TextInput::make('name')
                //     ->required()
                //     ->maxLength(255)
                //     ->autocomplete(false),
                // TextInput::make('headline')
                //     ->required()
                //     ->maxLength(255)
                //     ->autocomplete(false),
                // TextInput::make('duration')
                //     ->required()
                //     ->maxLength(255)
                //     ->autocomplete(false),
                // TextInput::make('location')
                //     ->required()
                //     ->maxLength(255)
                //     ->autocomplete(false),
                // TextInput::make('price')
                //     ->required()
                //     ->numeric()
                //     ->prefix('$'),
                // Select::make('categories')
                //     ->relationship('categories', 'name')
                //     ->multiple()
                //     ->preload()
                //     ->searchable(),
                // Toggle::make('is_recommended')->default(false),
                // RichEditor::make('overview')
                //     ->required()
                //     ->columnSpanFull(),
                // FileUpload::make('thumbnail')
                //     ->required()
                //     ->directory('tour-thumbnails'),
                // Repeater::make('images')
                //     ->relationship('images') // Relasi hasMany
                //     ->schema([
                //         FileUpload::make('image_url')
                //             ->directory('tour-images')
                //             ->image()
                //             ->required(),
                //     ])
                //     ->columnSpanFull()
                //     ->grid(2),
                // Repeater::make('includes')
                //     ->relationship('includes')
                //     ->schema([
                //         TextInput::make('include_item')
                //             ->required()
                //             ->maxLength(255)
                //             ->autocomplete(false)
                //     ]),
                // Repeater::make('highlights')
                //     ->relationship('highlights')
                //     ->schema([
                //         TextInput::make('highlight_item')
                //             ->required()
                //             ->maxLength(255)
                //             ->autocomplete(false)
                //     ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->limit(30),
                ImageColumn::make('thumbnail')
                    ->height(50)
                    ->width(100),
                TextColumn::make('price')
                    ->label('Price')
                    ->getStateUsing(function ($record) {
                        $price = $record->first()->price ?? 0;
                        return '$ ' . number_format($price, 0, ',', '.');
                    })
                    ->sortable(),
                TextColumn::make('duration')
                    ->searchable()
                    ->sortable()
                    ->limit(30),
                TextColumn::make('is_recommended')
                    ->badge()
                    ->label('Recommended')
                    ->color(fn(bool $state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn(bool $state): string => $state ? 'Active' : 'Inactive')
                    ->alignCenter(),
                TextColumn::make('is_highlighted')
                    ->badge()
                    ->label('Highlighted')
                    ->color(fn(bool $state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn(bool $state): string => $state ? 'Active' : 'Inactive')
                    ->alignCenter(),
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

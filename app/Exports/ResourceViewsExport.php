<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;

class ResourceViewsExport implements  WithHeadings, FromCollection, WithTitle, WithEvents
{
    private $data;

    public function __construct($data)
    {
        $this->data = $data;
        $this->title = 'Views';
    }

    public function collection()
    {
        return $this->data;
    }


    public function headings(): array
    {
        return [
            'Resource Topic',
            'Company Name',
            'Email Address',
            'First Name',
            'Last Name',
            'Cell',
            'Work',
            'Address',
            'City',
            'Country',
            'State/Province',
            'Postal/ZipCode',
            'Region',
            'Date',
        ];

    }

    public function title(): string
    {
        return $this->title;
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $event->sheet->getStyle('A1:N1')->applyFromArray([
                    'font' => [
                        'bold' => true
                    ]
                ]);
            },
        ];
    }


}

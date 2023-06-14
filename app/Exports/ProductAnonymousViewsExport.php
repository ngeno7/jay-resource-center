<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;

class ProductAnonymousViewsExport implements  WithHeadings, FromCollection, WithTitle, WithEvents
{
    private $data;

    public function __construct($data)
    {
        $this->data = $data;
        $this->title = 'Anonymous Views';
    }

    public function collection()
    {
        return $this->data;
    }


    public function headings(): array
    {
        return [
            'Product Title',
            'IP Address',
            'City',
            'Country',
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

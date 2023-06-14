<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Events\AfterSheet;

class SponsorExport implements FromCollection, WithHeadings, WithTitle, WithEvents {
    /**
     * @return \Illuminate\Support\Collection
     */
    private $collection;
    private $heading;
    private $title;
    private $colRange;

    public function __construct($collection, $heading, $title,$colRange) {
        $this->collection = $collection;
        $this->heading = $heading;
        $this->title = $title;
        $this->colRange = $colRange;
    }
    public function collection() {
        return $this->collection;
    }

    public function headings(): Array{
        return $this->heading;
    }
    public function title(): string {
        return $this->title;
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
            		$event->sheet->getDelegate()->getStyle(
            			implode(':',$this->colRange))->getAlignment()->setWrapText(true);
                foreach (range($this->colRange[0], $this->colRange[1]) as $char) {
                	$event->sheet->getDelegate()->getColumnDimension($char)->setWidth(23);
                // dd();
				}
                $event->sheet->getStyle($this->colRange[0].'1:'.$this->colRange[1].'1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                ]);
            },
        ];
    }
}

<?php

namespace App\Exports;
use App\ResourceViews;
use Maatwebsite\Excel\Concerns\FromCollection;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;


class MultipleSheetsExport implements WithMultipleSheets
{
    private $data;
    private $data1;
    private $data2;

    public function __construct($data,$data1,$data2)
    {
        $this->data = $data;
        $this->data1 = $data1;
        $this->data2 = $data2;
    }

    public function sheets(): array
    {
        $sheets = [];

        $sheets[] = new ResourceDownloadsExport($this->data);
        $sheets[] = new ResourceViewsExport($this->data1);
        $sheets[] = new ResourceAnonymousViewsExport($this->data2);

        return $sheets;
    }


}
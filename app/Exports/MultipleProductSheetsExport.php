<?php

namespace App\Exports;

use App\ProductAnonymousViews;
use App\ProductViews;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class MultipleProductSheetsExport implements WithMultipleSheets
{
    private $data;
    private $data1;

    public function __construct($data,$data1)
    {
        $this->data = $data;
        $this->data1 = $data1;
    }

    public function sheets(): array
    {
        $sheets = [];

        $sheets[] = new ProductViewsExport($this->data);
        $sheets[] = new ProductAnonymousViewsExport($this->data1);

        return $sheets;
    }

}

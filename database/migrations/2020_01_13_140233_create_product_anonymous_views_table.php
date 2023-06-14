<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductAnonymousViewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_anonymous_views', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('product_id');
            $table->foreign('product_id')->references('product_id')->on('products');
            $table->string('ip_address')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->string('date');
            $table->string('timestamp');
            $table->string('site_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_anonymous_views');
    }
}

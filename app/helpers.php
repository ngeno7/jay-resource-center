<?php
function amountFormat($amount) {

		if ($amount > 1000) {

			$x = round($amount);
			$x_number_format = number_format($x);
			$x_array = explode(',', $x_number_format);
			$x_parts = array('K+', 'M+', 'B+', 'T+');
			$x_count_parts = count($x_array) - 1;
			$x_display = $x;
			$x_display = $x_array[0] . ((int) $x_array[1][0] !== 0 ? '.' . $x_array[1][0] : '');
			$x_display .= $x_parts[$x_count_parts - 1];

			return $x_display;

		} else {
			return $amount;
		}
	}

 ?>
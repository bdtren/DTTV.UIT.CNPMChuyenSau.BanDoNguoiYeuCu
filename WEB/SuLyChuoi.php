<?php

    function TangMa($Ma)
    {
        $tukhoa = substr($Ma,0,2);
        $m = substr($Ma,2);
        $z = 1 + $m;
        $tk = '';
        if($z<10)
        {
            $tk = $tukhoa."000".$z;
        } 
        else 
            if($z<100)
            {
                $tk = $tukhoa."00".$z;
            }
            else 
                if($z<1000)
                {
                    $tk = $tukhoa."0".$z;
                }
                else
                {
                    $tk = $tukhoa.$z;
                }

        return $tk;
    }

?>
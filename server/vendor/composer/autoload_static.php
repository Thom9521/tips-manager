<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5e37ad63deade984c60de383c75c84c2
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5e37ad63deade984c60de383c75c84c2::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5e37ad63deade984c60de383c75c84c2::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5e37ad63deade984c60de383c75c84c2::$classMap;

        }, null, ClassLoader::class);
    }
}

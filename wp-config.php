<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'website' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-i?9D.vmw)yDOO=Vi52ERi[l O9c`le%NTYgh93C*)@aCw-ECH&~dFo=8.pLGg$@' );
define( 'SECURE_AUTH_KEY',  '|w`ioE>^xPh,RW)Y5`}d^sn1Tpcl/8&Fm`sHVsbg!(>:jzrnjmDxDOaz[_)2/zTw' );
define( 'LOGGED_IN_KEY',    'HVQOmGNAdv1[?;Zw`f:j_dLLYz4=-iL2[9s9qX0)_vF{iRP~#DnIQYZ8<rMbxX[/' );
define( 'NONCE_KEY',        'h[BcC~M:1^(A`~z~.5`[/]#dDt;@`532!2njLoUM6FxxoJ/]#*C`RLGlH2y{TPCF' );
define( 'AUTH_SALT',        'T{~J=)(cm.%k{v9L1AUb Y_sVAxtHS~ywc&/I)8iA0hpc(P=}I;q0c>K9T][;9ty' );
define( 'SECURE_AUTH_SALT', '8Y^Kt]:wi|BuXzn0qsvz,g@$yeUY_T=hAK^wr$(88JWEkIE~>Q*dD:e#KW)5dZ~{' );
define( 'LOGGED_IN_SALT',   'UHx>v@VYbj[FWUz$SH{x7,x(yAfXTl/Ilf7PsvsW4chZ*NCM#o}?Xr=gQpwD(`2A' );
define( 'NONCE_SALT',       'ge,f6~y;3=48YM9C-2*kR/^hHj;-z:HE$0)S]yv+U+w^|)k|teVEu,y:2R){>Ye{' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

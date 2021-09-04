<?php 
    add_theme_support('post-thumbnails', array('post', 'additions'));

    // add_action('wp_enqueue_scripts', 'scripts_theme');

    function scripts_theme()
    {
	wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', false, null);
    wp_enqueue_script('jquery');
    
    };

    add_action('init', 'register_post_types');

    function register_post_types()
    {
        register_post_type('additions', array(
            'label'  => null,
            'labels' => array(
                'name'               => 'Доп. услуги', // основное название для типа записи
                'singular_name'      => 'Доп. услуги', // название для одной записи этого типа
                'add_new'            => 'Добавить доп. услугу', // для добавления новой записи
                'add_new_item'       => 'Добавление доп. услуги', // заголовка у вновь создаваемой записи в админ-панели.
                'edit_item'          => 'Редактирование доп. услуги', // для редактирования типа записи
                'new_item'           => 'Новая доп. услуга', // текст новой записи
                'view_item'          => 'Смотреть доп. услугу', // для просмотра записи этого типа.
                'search_items'       => 'Искать доп. услугу', // для поиска по этим типам записи
                'not_found'          => 'Доп. услуга не найден', // если в результате поиска ничего не было найдено
                'not_found_in_trash' => 'Доп. услуга не найден в корзине', // если не было найдено в корзине
                'parent_item_colon'  => '', // для родителей (у древовидных типов)
                'menu_name'          => 'Доп. услуги', // название меню
            ),
            'description'         => '',
            'public'              => true,
            'publicly_queryable'  => true, // зависит от public
            'exclude_from_search' => false, // зависит от public, то есть исключить из поиска при true!!!
            'show_ui'             => true, // зависит от public
            'show_in_menu'        => true, // показывать ли в меню адмнки
            'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
            'show_in_nav_menus'   => true, // зависит от public
            'show_in_rest'        => true, // добавить в REST API. C WP 4.7
            'rest_base'           => null, // $post_type. C WP 4.7
            'menu_position'       => 4,
            'menu_icon'           => 'dashicons-awards', 
            'hierarchical'        => false,
            'supports'            => array('title', 'editor', 'thumbnail', 'excerpt', 'comments'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
            'taxonomies'          => array(),
            'has_archive'         => false,
            'rewrite'             => true,
            'query_var'           => true,
        ));

    }

    // function my_plugin_rest_route_for_post( $route, $post ) {
    //     // $request = new WP_REST_Request( 'GET', $path_parts['path'] );
    //     if ( $post->post_type === 'additions' ) {
    //         $route = '/wp/v2/additions/' . $post->ID;
    //     }
     
    //     return $route;
    // }
    //add_filter( 'rest_route_for_post', 'my_plugin_rest_route_for_post', 10, 2 );

    add_action( 'rest_api_init', function () {
        register_rest_route( 'wp/v2', '/additions/', array(
        'methods' => 'GET',
        'callback' => 'get_additions'
            ));
        });
        //callback function
        function get_additions(){
            
           $args = array( 
            'post_type' => 'additions', 
            'post_status' => 'publish', 
            'nopaging' => true 
        );
            $query = new WP_Query( $args ); // $query is the WP_Query Object
            $posts = $query->get_posts();   // $posts contains the post objects
            
            $output = array();
            foreach( $posts as $post ) {    // Pluck the id and title attributes
                $acf = array('descriptionList' => []);

                if (have_rows('description-list', $post->ID))
                    while (have_rows('description-list', $post->ID)) : 
                        the_row();
                        if (get_sub_field('description-item', $post->ID)):
                            array_push($acf['descriptionList'], get_sub_field('description-item', $post->ID));
                        endif;
                    endwhile;
                
                $output[] = array( 
                    'id' => $post->ID, 
                    'title' => array ('rendered' => $post->post_title), 
                    'content' => array ('rendered' => $post->post_content), 
                    '_embedded' => array('wp:featuredmedia' => [array('source_url' => get_the_post_thumbnail_url($post->ID, 'full'))]),
                    'acf' => $acf,
                    'type' => $post->post_type
                );
                // , 'img' => 'img');
            }
            wp_send_json( $output ); // getting data in json format.
                    
        }
?>
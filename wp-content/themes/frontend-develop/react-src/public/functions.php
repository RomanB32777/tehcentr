<?php 
    add_theme_support('post-thumbnails', array('post', 'additions'));

    add_action('wp_enqueue_scripts', 'scripts_theme');

    function scripts_theme()
    {
    // wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', false, null);
    //  wp_enqueue_script('jquery');
    
    };
    
    
    add_action('admin_init', 'my_general_section');  
    
    function my_general_section() { 
        
    add_settings_section(  
        'my_settings_section', // Section ID 
        'Информация о компании', // Section Title
        'my_section_options_callback', // Callback
        'general' // What Page?  This makes the section show up on the General Settings Page
    );

        	
    add_settings_field( // Option 0
        'info_head', // Option ID
        'Заголовок', // Label
        'my_textarea_callback', // !important - This is where the args go!
        'general', // Page it will be displayed (General Settings)
        'my_settings_section', // Name of our section
        array( // The $args
            'info_head' // Should match Option ID
        )  
    ); 
        
	add_settings_field( // Option 1
        'info_description', // Option ID
        'Краткая информация', // Label
        'my_textarea_callback', // !important - This is where the args go!
        'general', // Page it will be displayed
        'my_settings_section', // Name of our section (General Settings)
        array( // The $args
            'info_description' // Should match Option ID
        )  
    );
    

    add_settings_field( // Option 1-1
        'info_description_footer', // Option ID
        'Краткая информация в нижней части сайта', // Label
        'my_textarea_callback', // !important - This is where the args go!
        'general', // Page it will be displayed
        'my_settings_section', // Name of our section (General Settings)
        array( // The $args
            'info_description_footer' // Should match Option ID
        )  
    );
    
    add_settings_field( // Option 2
        'info_email', // Option ID
        'Почта', // Label
        'my_textbox_callback', // !important - This is where the args go!
        'general', // Page it will be displayed (General Settings)
        'my_settings_section', // Name of our section
        array( // The $args
            'info_email' // Should match Option ID
        )  
    ); 
		
    add_settings_field( // Option 2
        'info_vk', // Option ID
        'ВК', // Label
        'my_textbox_callback', // !important - This is where the args go!
        'general', // Page it will be displayed (General Settings)
        'my_settings_section', // Name of our section
        array( // The $args
            'info_vk' // Should match Option ID
        )  
    ); 

    add_settings_field( // Option 3
        'info_phone1', // Option ID
        'Телефон 1', // Label
        'my_textbox_callback', // !important - This is where the args go!
        'general', // Page it will be displayed
        'my_settings_section', // Name of our section (General Settings)
        array( // The $args
            'info_phone1' // Should match Option ID
        )  
    ); 
    
    add_settings_field( // Option 4
        'info_phone2', // Option ID
        'Телефон 2', // Label
        'my_textbox_callback', // !important - This is where the args go!
        'general', // Page it will be displayed
        'my_settings_section', // Name of our section (General Settings)
        array( // The $args
            'info_phone2' // Should match Option ID
        )  
    ); 
		
	add_settings_field( // Option 4
        'info_phone3', // Option ID
        'Телефон 3 (Новосоветская)', // Label
        'my_textbox_callback', // !important - This is where the args go!
        'general', // Page it will be displayed
        'my_settings_section', // Name of our section (General Settings)
        array( // The $args
            'info_phone3' // Should match Option ID
        )  
    ); 

	add_settings_field( // Option 5
        'info_addr', // Option ID
        'Адрес', // Label
        'my_textbox_callback', // !important - This is where the args go!
        'general', // Page it will be displayed
        'my_settings_section', // Name of our section (General Settings)
        array( // The $args
            'info_addr' // Should match Option ID
        )  
    );
		
	add_settings_field( // Option 6
        'info_addr_2', // Option ID
        'Адрес 2', // Label
        'my_textbox_callback', // !important - This is where the args go!
        'general', // Page it will be displayed
        'my_settings_section', // Name of our section (General Settings)
        array( // The $args
            'info_addr_2' // Should match Option ID
        )  
    );
    
    add_settings_field( // Option 7
        'info_addr_link', // Option ID
        'Ссылка местоположения на карте', // Label
        'my_textbox_callback', // !important - This is where the args go!
        'general', // Page it will be displayed
        'my_settings_section', // Name of our section (General Settings)
        array( // The $args
            'info_addr_link' // Should match Option ID
        )  
    );
		
	add_settings_field( // Option 8
        'info_addr_link_2', // Option ID
        'Ссылка местоположения на карте', // Label
        'my_textbox_callback', // !important - This is where the args go!
        'general', // Page it will be displayed
        'my_settings_section', // Name of our section (General Settings)
        array( // The $args
            'info_addr_link_2' // Should match Option ID
        )  
    );
    
    add_settings_field( // Option 9
        'per_page_custom', // Option ID
        'Кол-во постов на странице', // Label
        'my_numbox_callback', // !important - This is where the args go!
        'general', // Page it will be displayed
        'my_settings_section', // Name of our section (General Settings)
        array( // The $args
            'per_page_custom' // Should match Option ID
        )  
    );
	
	
	register_setting('general','info_head', 'esc_attr');
	register_setting('general','info_description', 'esc_attr');
	register_setting('general','info_description_footer', 'esc_attr');
	register_setting('general','info_email', 'esc_attr');
	register_setting('general','info_vk', 'esc_attr');	
    register_setting('general','info_phone1', 'esc_attr');
    register_setting('general','info_phone2', 'esc_attr');
	register_setting('general','info_phone3', 'esc_attr');
    register_setting('general','info_addr', 'esc_attr');
    register_setting('general','info_addr_link', 'esc_attr');
    register_setting('general','info_addr_2', 'esc_attr');
    register_setting('general','info_addr_link_2', 'esc_attr');
    register_setting('general','per_page_custom', 'esc_attr');
}

function my_section_options_callback() { // Section Callback
    echo '<p>Изменить информацию о компании</p>';  
}

function my_textbox_callback($args) {  // Textbox Callback
    $option = get_option($args[0]);
    echo '<input type="text" id="'. $args[0] .'" name="'. $args[0] .'" value="' . $option . '" />';
}

function my_numbox_callback($args) {  // Textbox Callback
    $option = get_option($args[0]);
    echo '<input type="number" id="'. $args[0] .'" name="'. $args[0] .'" value="' . $option . '" />';
}

function my_textarea_callback($args) {  // Textbox Callback
    $option = get_option($args[0]);
    echo '<textarea cols="60" rows="6" type="text" id="'. $args[0] .'" name="'. $args[0] .'"/>'. $option .'</textarea>';
}


    add_action('rest_api_init', function () {
        register_rest_route( 'api/v2', '/customset', array(
            'methods' => 'GET',
            'callback' => 'get_custom_settings'
        ));
    });
    
    function get_custom_settings($req) {
        $settings = array (
            "per_page" =>  get_option("per_page_custom"),
            "contacts" => array (
                "phones" => array (
                    get_option("info_phone1"), 
                    get_option("info_phone2"),
					get_option("info_phone3")
                ),
                "email" =>  get_option("info_email"),
				"vk" =>  get_option("info_vk"),
                "location" => array(
                    "text" => get_option("info_addr"),
                    "link" => get_option("info_addr_link"),
                ),
				 "location_2" => array(
                    "text" => get_option("info_addr_2"),
                    "link" => get_option("info_addr_link_2"),
                ),
                "domain" => $_SERVER['SERVER_NAME']
            ),
            "head" => array (
                "info_head" =>  get_option("info_head"),
                "info_description" =>  get_option("info_description"),
                "info_description_footer" =>  get_option("info_description_footer"),
            )
        );
       
        return $settings;
    }


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
                    //'_embedded' => array('wp:featuredmedia' => [array('source_url' => get_the_post_thumbnail_url($post->ID, 'full') )]),
                    'acf' => $acf,
                    'featured_media_src_url' => get_the_post_thumbnail_url($post->ID, 'full'),
                    'type' => $post->post_type
                );
                // , 'img' => 'img');
            }
            wp_send_json( $output ); // getting data in json format.
                    
        }
?>
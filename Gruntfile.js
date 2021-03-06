// Generated on 2015-02-04 using generator-angular 0.11.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/unit/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/unit/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist', 
    test: 'test'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      jsTemplate:{
        files:['<%= yeoman.app %>/scripts/htmlTemplates.js'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js','<%= yeoman.app %>/modules/**/scripts/{,*/}*.js','!<%= yeoman.app %>/scripts/htmlTemplates.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      //jsTest: {
        //files: ['test/unit/{,*/}*.js'],
        //tasks: ['newer:jshint:test', 'karma']
      //},
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}','<%= yeoman.app %>/modules/**/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      template:{
        files:['<%= yeoman.app %>/**/{,**/}*.html'],
        tasks:['ngtemplates']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9003,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35730
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/app/bower_components',
                connect.static('./app/bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9004,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/app/bower_components',
                connect.static('./app/bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js',
          '<%= yeoman.app %>/modules/**/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/unit/{,*/}*.js']
      }
    },

    svgmin: {
      dist: {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/images/svg/',
            src: ['*.svg'],
            dest: '.tmp/images/svg_min/'
        }]
      }
    },

    grunticon: {
      dist: {
        files: [{
            expand: true,
            cwd: '.tmp/images/svg_min/',
            src: ['*.svg', '*.png'],
            dest: '<%= yeoman.app %>/images/svg_gen/'
        }],
        options: {
          cssprefix:'.svg-icon-'
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '<%= yeoman.app %>/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: './app/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          sourcemap: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/images',
          '<%= yeoman.dist %>/styles'
        ]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html', 'modules/**/views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js', '!oldieshim.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'modules/**/views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'app/bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
          dest: '<%= yeoman.dist %>'
        },
        {
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: 'images/svg_gen/*.css',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    wiredep: {
      task: {
        src: ['<%= yeoman.app %>/index.html','<%= yeoman.test %>/karma.conf.js' ],
        ignorePath:  /\.\.\//,
        options:{
          exclude: [ '/jquery/', 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js' ],
        }
      }
    },

     ngtemplates : {
      'angular.bootstrap.htmlTemplates' : {
        src     : '<%= yeoman.app %>/**/{,**/}*.html',
        dest    : '<%= yeoman.app %>/scripts/htmlTemplates.js',
        options : {
          standalone : true
        }
      }
    },

    // enviroment specific configuration
    ///////////////////////////////////////
    replace: {
      dev: {
        options: {
          patterns: [
            {
              json: grunt.file.readJSON('./app/config/environments/dev.json')
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./app/config/template/config.js'],
            dest: '<%= yeoman.app %>/config/'
          }
        ]
      },
      staging: {
        options: {
          patterns: [
            {
              json: grunt.file.readJSON('./app/config/environments/staging.json')
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./app/config/template/config.js'],
            dest: '<%= yeoman.app %>/config/'
          }
        ]
      },
      production: {
        options: {
          patterns: [
            {
              json: grunt.file.readJSON('./app/config/environments/production.json')
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./app/config/template/config.js'],
            dest: '<%= yeoman.app %>/config/'
          }
        ]
      }
    },


    // Run some tasks in parallel to speed up the build process
    concurrent: {
      options: {
        limit:4
      },
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },
    
    shell:{
      updateWebdriver:{
        command:'node_modules/protractor/bin/webdriver-manager update --standalone'
      }  
    },

    protractor_webdriver: {
        start: {
            options: {
                path: 'node_modules/protractor/bin/',
                command: 'webdriver-manager start'
            }
        }
    },
    protractor: {
      options: {
        // Location of your protractor config file
        configFile: "test/protractor.conf.js",
     
        // Do you want the output to use fun colors?
        noColor: false,
     
        // Set to true if you would like to use the Protractor command line debugging tool
        // debug: true,
     
        // Additional arguments that are passed to the webdriver command
        args: { 
          seleniumPort: 4444
        }
      },
      e2e: {
        options: {
          // Stops Grunt process if a test fails
          keepAlive: false
        }
      }
    }
  });

grunt.registerTask('svgIcons',[
    'svgmin',
    'grunticon'
  ]);


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'wiredep', 'connect:dist:keepalive']);
    }

    if (target === 'production') {
      return grunt.task.run(['replace:production', 'build', 'wiredep', 'connect:dist:keepalive']);
    }

    if (target === 'staging') {
      return grunt.task.run(['replace:staging', 'build', 'wiredep', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'replace:dev',
      'ngtemplates',
      'svgIcons',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });


   grunt.registerTask('e2e', [
    'shell:updateWebdriver',
    'protractor_webdriver:start',
    'protractor'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'replace:dev',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'compass:dist',
    'imagemin',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'svgIcons',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin',
    'ngtemplates'
  ]);

  grunt.registerTask('production',[
    'newer:jshint',
    'replace:production',
    'test',
    'build'
  ]);

  grunt.registerTask('staging',[
    'newer:jshint',
    'replace:staging',
    'test',
    'build'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};

/**
 * Copyright 2002-2013, University of Colorado
 * RequireJS configuration file for Resistance in a Wire simulation.
 * Author: Vasily Shakhov (Mlearner)
 */


require.config( {
                  deps: ["resistance-in-a-wire-main"],

                  paths: {
                    // contrib
                    easel: "../contrib/easel-0.5.0",
                    i18n: "../contrib/i18n/i18n",
                    image: '../contrib/image-0.2.1',
                    tpl: "../contrib/tpl-0.2",

                    // common directories, uppercase names to identify them in require imports
                    PHETCOMMON: "../lib/phet/phetcommon/js"
                  },

                  shim: {
                    easel: {
                      exports: "createjs"
                    }
                  },

                  urlArgs: new Date().getTime()  // cache buster to make browser refresh load all included scripts

                } );

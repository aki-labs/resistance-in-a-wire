// Copyright 2002-2013, University of Colorado Boulder

/**
 * Copyright 2002-2013, University of Colorado
 * RequireJS configuration file for Resistance in a Wire simulation.
 * @author Vasily Shakhov (Mlearner)
 * @author Anton Ulyanov (Mlearner
 */


require.config( {
  deps: ["resistance-in-a-wire-main"],

  paths: {
    // third-party libs
    i18n: '../lib/i18n-2.0.2',

    // PhET libs, uppercase names to identify them in require.js imports
    ASSERT: '../../assert/js',
    AXON: '../../axon/js',
    DOT: '../../dot/js',
    JOIST: '../../joist/js',
    KITE: '../../kite/js',
    NITROGLYCERIN: '../../nitroglycerin/js',
    PHET_CORE: '../../phet-core/js',
    PHETCOMMON: '../../phetcommon/js',
    SCENERY: '../../scenery/js',
    SCENERY_PHET: '../../scenery-phet/js',
    SUN: '../../sun/js'

  },

  urlArgs: new Date().getTime()  // cache buster to make browser refresh load all included scripts

} );

/**
 * Copyright 2002-2013, University of Colorado
 * Main container for all part of scene
 * Author: Vasily Shakhov (Mlearner)
 */

define( function ( require ) {
  'use strict';

  var Easel = require( "easel" );
  var SlidersBox = require( "view/shape-views/SlidersBox" );
  var FormulaView = require( "view/shape-views/FormulaView" );
  var ResistorView = require( "view/shape-views/ResistorView" );

  return function RootNode( model, view ) {
    var root = new Easel.Container();

    //background
    var background = new Easel.Shape();
    background.graphics.beginFill( '#ffffdf' ).rect( 0, 0, view.DEFAULTWIDTH, view.DEFAULTHEIGHT );
    root.addChild( background );

    root.addChild( new FormulaView( model, 70, 400 ) );
    root.addChild( new SlidersBox( model, view, 600, 60 ) );
    root.addChild( new ResistorView( model, view, 10, 40 ) );


    return root;
  };
} );
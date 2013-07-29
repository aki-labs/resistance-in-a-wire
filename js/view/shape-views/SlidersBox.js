// Copyright 2002-2013, University of Colorado Boulder

/**
 * Copyright 2002-2013, University of Colorado
 * Container for sliders and circumjacent text
 * @author Vasily Shakhov (Mlearner)
 * @author Anton Ulyanov (Mlearner)
 */


define( function( require ) {
  'use strict';
  var Node = require( 'SCENERY/nodes/Node' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Strings = require( 'resistance-in-a-wire-strings' );
  var WhiteBox = require( 'view/shape-views/slider-box-view/WhiteBox' );
  var Slider = require( 'view/shape-views/slider-box-view/Slider' );
  var CurrentResistanceView = require( "view/shape-views/slider-box-view/CurrentResistanceView" );
  var imageLoader = require( 'imageLoader' );
  var Text = require( 'SCENERY/nodes/Text' );

  function SlidersBox( model, x, y ) {
    Node.call( this, {x: x, y: y} );
    var rectW = 380,
      rectH = 500,
      textResistivity, textLength, textArea;
    this.addChild( new WhiteBox( 0, 0, rectW, rectH ) );
    //xy Grid
    var yCoords = [60, 120, 410 , 453];
    var xCoords = [70, 195, 320];

    this.addChild( new Text( "ρ", { 'fontFamily': "Times New Roman", 'fontSize': 60, fill: "#0f0ffb", centerX: xCoords[0], top: yCoords[0] - 10 } ) );
    this.addChild( new Text( Strings.resistivity, { 'fontFamily': "Verdana", 'fontSize': 16, textAlign: "center", textAnchor: "middle", fill: "#0f0ffb", centerX: xCoords[0], top: yCoords[1] } ) );
    this.addChild( textResistivity = new Text( model.resistivity.toFixed( 2 ), { 'fontFamily': "Verdana", 'fontSize': 30, textAlign: "end", textAnchor: "end", fill: "#000", centerX: xCoords[0], top: yCoords[2] } ) );
    this.addChild( new Text( "Ω" + Strings.cm, { 'fontFamily': "Verdana", 'fontSize': 30, textAlign: "start", textAnchor: "start", fill: "#0f0ffb", centerX: xCoords[0], top: yCoords[3] } ) );

    this.addChild( new Text( "L", { 'fontFamily': "Times New Roman", 'fontSize': 60, fill: "#0f0ffb", centerX: xCoords[1], top: yCoords[0] } ) );
    this.addChild( new Text( Strings.length, { 'fontFamily': "Verdana", 'fontSize': 16, textAlign: "center", textAnchor: "middle", fill: "#0f0ffb", centerX: xCoords[1], top: yCoords[1] } ) );
    this.addChild( textLength = new Text( model.length.toFixed( 2 ), { 'fontFamily': "Verdana", 'fontSize': 30, textAlign: "end", textAnchor: "end", fill: "#000", centerX: xCoords[1], top: yCoords[2] } ) );
    this.addChild( new Text( Strings.cm, { 'fontFamily': "Verdana", 'fontSize': 30, textAlign: "start", textAnchor: "start", fill: "#0f0ffb", centerX: xCoords[1], top: yCoords[3] } ) );

    this.addChild( new Text( "A", { 'fontFamily': "Times New Roman", 'fontSize': 60, fill: "#0f0ffb", centerX: xCoords[2], top: yCoords[0] } ) );
    this.addChild( new Text( Strings.area, { 'fontFamily': "Verdana", 'fontSize': 16, textAlign: "center", textAnchor: "middle", fill: "#0f0ffb", centerX: xCoords[2], top: yCoords[1] } ) );
    this.addChild( textArea = new Text( model.area.toFixed( 2 ), { 'fontFamily': "Verdana", 'fontSize': 30, textAlign: "end", textAnchor: "end", fill: "#000", centerX: xCoords[2], top: yCoords[2] } ) );
    this.addChild( new Text( Strings.cm + "²", { 'fontFamily': "Verdana", 'fontSize': 30, textAlign: "start", textAnchor: "start", fill: "#0f0ffb", centerX: xCoords[2], top: yCoords[3] } ) );

    this.addChild( new Slider( xCoords[0], 145, 260, model.resistivityProperty, imageLoader.getImage( 'slider.png' ), {min: model.RESISTYVITYMIN, max: model.RESISTYVITYMAX} ) );
    this.addChild( new Slider( xCoords[1], 145, 260, model.lengthProperty, imageLoader.getImage( 'slider.png' ), {min: model.LENGTHMIN, max: model.LENGTHMAX} ) );
    this.addChild( new Slider( xCoords[2], 145, 260, model.areaProperty, imageLoader.getImage( 'slider.png' ), {min: model.AREAMIN, max: model.AREAMAX} ) );

    model.resistivityProperty.link( function updateTextResistivity( value ) {
      textResistivity.text = value.toFixed( 2 );
      textResistivity.centerX = xCoords[0];
    } );
    model.lengthProperty.link( function updateTextLength( value ) {
      textLength.text = value.toFixed( 2 );
      textLength.centerX = xCoords[1];
    } );
    model.areaProperty.link( function updateTextArea( value ) {
      textArea.text = value.toFixed( 2 );
      textArea.centerX = xCoords[2];
    } );

    //resistance value
    this.addChild( new CurrentResistanceView( model, rectW / 2, 30, rectW ) );

  }

  inherit( Node, SlidersBox );

  return SlidersBox;
} );
// Copyright 2013-2015, University of Colorado Boulder

/**
 * White Block with black border container
 * @author Vasily Shakhov (Mlearner)
 * @author Anton Ulyanov (Mlearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var Node = require( 'SCENERY/nodes/Node' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  /**
   * @param x
   * @param y
   * @param w
   * @param h
   * @constructor
   */
  function WhiteBox( x, y, w, h ) {
    Node.call( this );
    this.addChild( new Rectangle( x, y, w, h, 12, 12, { fill: '#FFF', stroke: '#000', lineWidth: 3 } ) );
  }

  return inherit( Node, WhiteBox );
} );
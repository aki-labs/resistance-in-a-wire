// Copyright 2002-2013, University of Colorado Boulder

/**
 * Copyright 2002-2013, University of Colorado
 * Stage for the "ResistanceInAWire" view.
 * @author Vasily Shakhov (Mlearner)
 * @author Anton Ulyanov (Mlearner)
 */

define( function( require ) {
  'use strict';
  var Node = require( 'SCENERY/nodes/Node' );
  var inherit = require( 'PHET_CORE/inherit' );
  var RootNode = require( "view/shape-views/RootNode" );

  function ResistanceInAWireStage( model ) {
    Node.call( this, {scale: 0.8} );
    this.addChild( new RootNode( model ) );
  }

  inherit( Node, ResistanceInAWireStage );
  return ResistanceInAWireStage;
} );

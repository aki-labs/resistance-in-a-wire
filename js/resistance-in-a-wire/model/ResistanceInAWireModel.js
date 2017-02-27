// Copyright 2013-2017, University of Colorado Boulder

/**
 * Model container for the "resistance-in-a-wire" module.
 *
 * @author Vasily Shakhov (Mlearner)
 * @author Anton Ulyanov (Mlearner)
 * @author John Blanco (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var DerivedProperty = require( 'AXON/DerivedProperty' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );
  var resistanceInAWire = require( 'RESISTANCE_IN_A_WIRE/resistanceInAWire' );

  // constants
  var DEFAULT_RESISTIVITY = 0.5;
  var DEFAULT_LENGTH = 10;
  var DEFAULT_AREA = 7.5;

  /**
   * @constructor
   */
  function ResistanceInAWireModel() {

    PropertySet.call( this, {
      resistivity: DEFAULT_RESISTIVITY,
      length: DEFAULT_LENGTH,
      area: DEFAULT_AREA
    } );

    // create a derived property that tracks the total resistance
    this.resistanceProperty = new DerivedProperty( [this.resistivityProperty, this.lengthProperty, this.areaProperty ],
      function( resistivity, length, area ){
        return resistivity * length / area;
      }
    );
  }

  resistanceInAWire.register( 'ResistanceInAWireModel', ResistanceInAWireModel );

  return inherit( PropertySet, ResistanceInAWireModel );
} );

// Copyright 2013-2017, University of Colorado Boulder

/**
 * Model which includes resistivity, length, area and resistance.
 *
 * @author Vasily Shakhov (Mlearner)
 * @author John Blanco (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var BooleanProperty = require( 'AXON/BooleanProperty' );
  var DerivedProperty = require( 'AXON/DerivedProperty' );
  var DerivedPropertyIO = require( 'AXON/DerivedPropertyIO' );
  var inherit = require( 'PHET_CORE/inherit' );
  var NumberIO = require( 'TANDEM/types/NumberIO' );
  var NumberProperty = require( 'AXON/NumberProperty' );
  var Range = require( 'DOT/Range' );
  var resistanceInAWire = require( 'RESISTANCE_IN_A_WIRE/resistanceInAWire' );
  var ResistanceInAWireConstants = require( 'RESISTANCE_IN_A_WIRE/resistance-in-a-wire/ResistanceInAWireConstants' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function ResistanceInAWireModel( tandem ) {

    // @public {Property.<number>} in Ohm*cm
    this.resistivityProperty = new NumberProperty( ResistanceInAWireConstants.RESISTIVITY_RANGE.defaultValue, {
      tandem: tandem.createTandem( 'resistivityProperty' ),
      units: 'ohm-centimeters',
      range: ResistanceInAWireConstants.RESISTIVITY_RANGE
    } );

    // @public {Property.<number>} in cm
    this.lengthProperty = new NumberProperty( ResistanceInAWireConstants.LENGTH_RANGE.defaultValue, {
      tandem: tandem.createTandem( 'lengthProperty' ),
      units: 'centimeters',
      range: ResistanceInAWireConstants.LENGTH_RANGE
    } );

    // @public {Property.<number>} in cm^2
    this.areaProperty = new NumberProperty( ResistanceInAWireConstants.AREA_RANGE.defaultValue, {
      tandem: tandem.createTandem( 'areaProperty' ),
      units: 'centimeters-squared',
      range: ResistanceInAWireConstants.AREA_RANGE
    } );

    // Derived property that tracks the resistance of the wire
    // @public {Property.<number>} in Ohms
    this.resistanceProperty = new DerivedProperty( [ this.resistivityProperty, this.lengthProperty, this.areaProperty ],
      function( resistivity, length, area ) {
        return resistivity * length / area;
      }, {
        tandem: tandem.createTandem( 'resistanceProperty' ),
        units: 'ohms',
        phetioType: DerivedPropertyIO( NumberIO )
      }
    );

    // @public {BooleanProperty} - indicates when a reset is in progress
    this.resetInProgressProperty = new BooleanProperty( false );
  }

  resistanceInAWire.register( 'ResistanceInAWireModel', ResistanceInAWireModel );

  return inherit( Object, ResistanceInAWireModel, {

    /**
     * resets the properties of the model
     * @public
     */
    reset: function() {
      this.resetInProgressProperty.set( true );
      this.resistivityProperty.reset();
      this.lengthProperty.reset();
      this.areaProperty.reset();
      this.resetInProgressProperty.set( false );
    }
  }, {

    /**
     * Get the total range of the derived resistance from the independent Properties of this model.
     *
     * @return {Range}
     */
    getResistanceRange: function() {
      var minResistance = ResistanceInAWireConstants.RESISTIVITY_RANGE.min * ResistanceInAWireConstants.LENGTH_RANGE.min / ResistanceInAWireConstants.AREA_RANGE.min;
      var maxResistance = ResistanceInAWireConstants.RESISTIVITY_RANGE.max * ResistanceInAWireConstants.LENGTH_RANGE.max / ResistanceInAWireConstants.AREA_RANGE.max;
      return new Range( minResistance, maxResistance );
    }
  } );
} );
// Copyright 2013-2019, University of Colorado Boulder

/**
 * Main View for the "ResistanceInAWire" screen.
 * @author Vasily Shakhov (Mlearner)
 * @author Anton Ulyanov (Mlearner)
 * @author John Blanco (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const AccessibleSummaryNode = require( 'RESISTANCE_IN_A_WIRE/resistance-in-a-wire/view/AccessibleSummaryNode' );
  const ArrowNode = require( 'SCENERY_PHET/ArrowNode' );
  const ControlPanel = require( 'RESISTANCE_IN_A_WIRE/resistance-in-a-wire/view/ControlPanel' );
  const FocusHighlightPath = require( 'SCENERY/accessibility/FocusHighlightPath' );
  const FormulaNode = require( 'RESISTANCE_IN_A_WIRE/resistance-in-a-wire/view/FormulaNode' );
  const inherit = require( 'PHET_CORE/inherit' );
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const resistanceInAWire = require( 'RESISTANCE_IN_A_WIRE/resistanceInAWire' );
  const ResistanceInAWireConstants = require( 'RESISTANCE_IN_A_WIRE/resistance-in-a-wire/ResistanceInAWireConstants' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const Shape = require( 'KITE/Shape' );
  const WireNode = require( 'RESISTANCE_IN_A_WIRE/resistance-in-a-wire/view/WireNode' );

  /**
   * @param {ResistanceInAWireModel} model
   * @param {Tandem} tandem
   * @constructor
   */
  function ResistanceInAWireScreenView( model, tandem ) {

    ScreenView.call( this, {
      tandem: tandem,
      screenSummaryContent: new AccessibleSummaryNode( model )
    } );

    // Create the control panel with sliders that change the values of the equation's variables. Hard coded
    const controlPanel = new ControlPanel( model, tandem.createTandem( 'controlPanel' ), {
      right: this.layoutBounds.right - 30,
      top: 40
    } );

    // Create the formula node that holds the equation with size changing variables.
    const formulaNode = new FormulaNode( model, tandem.createTandem( 'formulaNode' ), {
      centerX: controlPanel.left / 2,
      centerY: 190
    } );
    this.pdomPlayAreaNode.addChild( formulaNode );

    // Create the wire display to represent the formula
    const wireNode = new WireNode( model, tandem.createTandem( 'wireNode' ), {
      centerX: formulaNode.centerX,
      centerY: formulaNode.centerY + 270
    } );
    this.pdomPlayAreaNode.addChild( wireNode );

    const tailX = wireNode.centerX - ResistanceInAWireConstants.TAIL_LENGTH / 2;
    const tipX = wireNode.centerX + ResistanceInAWireConstants.TAIL_LENGTH / 2;
    const arrowHeight = this.layoutBounds.bottom - 47;

    // create static arrow below the wire
    const arrowNode = new ArrowNode( tailX, arrowHeight, tipX, arrowHeight, {
      headHeight: ResistanceInAWireConstants.HEAD_HEIGHT,
      headWidth: ResistanceInAWireConstants.HEAD_WIDTH,
      tailWidth: ResistanceInAWireConstants.TAIL_WIDTH,
      fill: ResistanceInAWireConstants.WHITE_COLOR,
      stroke: ResistanceInAWireConstants.BLACK_COLOR,
      lineWidth: 1,
      tandem: tandem.createTandem( 'arrowNode' )
    } );
    this.pdomPlayAreaNode.addChild( arrowNode );

    const resetAllButton = new ResetAllButton( {
      listener: function() { model.reset(); },
      radius: 30,
      right: controlPanel.right,
      bottom: this.layoutBounds.bottom - 20,
      tandem: tandem.createTandem( 'resetAllButton' )
    } );
    this.pdomControlAreaNode.addChild( resetAllButton );

    // the outer stroke of the ResetAllButton focus highlight is black so that it is visible when the equation
    // resistance letter grows too large
    const highlightShape = resetAllButton.focusHighlight;
    assert && assert( highlightShape instanceof Shape, 'highlightShape must be a Shape' );
    resetAllButton.focusHighlight = new FocusHighlightPath( highlightShape, { outerStroke: 'black' } );

    // add the control panel last so it is always on top.
    this.pdomPlayAreaNode.addChild( controlPanel );
  }

  resistanceInAWire.register( 'ResistanceInAWireScreenView', ResistanceInAWireScreenView );

  return inherit( ScreenView, ResistanceInAWireScreenView );
} );
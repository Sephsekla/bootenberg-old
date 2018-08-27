/**
 * Block dependencies
 */
import classnames from 'classnames';

import './style.scss';
import './editor.scss';
import './layout.scss';

const { __ } = wp.i18n;

const { Fragment } = wp.element;

const { registerBlockType } = wp.blocks;

const { InnerBlocks,  InspectorControls } = wp.editor;

const attributes = {xsControl: {
  type: 'string',
},}

const { PanelBody, PanelRow, SelectControl } = wp.components;


/**
 * Register example block
 */
export default registerBlockType(
    'bootenberg/column',
    {
        title: __( 'Bootstrap Column', 'bootenberg' ),
        description: __( 'Custom Column Block.', 'bootenberg'),
        parent: [ 'bootenberg/row' ],
        category: 'layout',
        icon: 'columns',
        keywords: [
            __( 'Columns', 'bootenberg' ),
        ],
        attributes,

        getEditWrapperProps() {
         
              return { 'class': 'editor-block-list__block col-md-6' };
          
      },
        

        edit: props => {

          const { attributes: { xsControl},
                className, setAttributes,  } = props;
                const classes = classnames(
                  className,
                  { 'col-md-6': true},
                  xsControl
                );

          return [

            <InspectorControls>
                <PanelBody
                    title={ __( 'Panel Body Title', 'bootenberg' ) }
                    initialOpen={ false }
                >
                    <PanelRow>
                        <p>{ __( 'Panel Body Copy', 'bootenberg' ) }</p>
                    </PanelRow>
                </PanelBody>

                <PanelBody>
                    <SelectControl
                        label={ __( 'Mobile Width', 'bootenberg' ) }
                        value={ xsControl }
                        options={ [
                            { value: 'a', label: __( 'Option A', 'bootenberg' ) },
                            { value: 'b', label: __( 'Option B', 'bootenberg' ) },
                            { value: 'c', label: __( 'Option C', 'bootenberg' ) },
                        ] }
                        onChange={ xsControl => setAttributes( {xsControl } ) }
                    />
                </PanelBody>

            </InspectorControls>,
            
          <div className={ classes }>
          <span>1/2 Width Column</span>

  <InnerBlocks/>

          </div>
          ];
        },
        save: props => {
          const { attributes:  { xsControl}, className, setAttributes } = props;
          const classes = classnames(
            className,
            { 'col-md-6': true },
            xsControl
          );
          return (
            <div className={ classes }>
              <InnerBlocks.Content />
            </div>
          );
        },
    },
);
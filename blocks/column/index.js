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

const attributes = {selectControl: {
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

          const { attributes: { selectControl },
                className, setAttributes,  } = props;
                const classes = classnames(
                  className,
                  { 'col-md-6': true },
                );

          return [

            <InspectorControls>
                <PanelBody
                    title={ __( 'Panel Body Title', 'jsforwpblocks' ) }
                    initialOpen={ false }
                >
                    <PanelRow>
                        <p>{ __( 'Panel Body Copy', 'jsforwpblocks' ) }</p>
                    </PanelRow>
                </PanelBody>

                <PanelBody>
                    <SelectControl
                        label={ __( 'Select Control', 'jsforwpblocks' ) }
                        value={ selectControl }
                        options={ [
                            { value: 'a', label: __( 'Option A', 'jsforwpblocks' ) },
                            { value: 'b', label: __( 'Option B', 'jsforwpblocks' ) },
                            { value: 'c', label: __( 'Option C', 'jsforwpblocks' ) },
                        ] }
                        onChange={ selectControl => setAttributes( { selectControl } ) }
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
          const { attributes: { className }, setAttributes } = props;
          const classes = classnames(
            className,
            { 'col-md-6': true },
          );
          return (
            <div className={ classes }>
              <InnerBlocks.Content />
            </div>
          );
        },
    },
);
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

const { InnerBlocks } = wp.editor;

const ALLOWED_BLOCKS = [ 'bootenberg/column' ];

const TEMPLATE = [ [ 'bootenberg/column', {}, [] ] , [ 'bootenberg/column', {}, [] ] ];

/**
 * Register example block
 */
export default registerBlockType(
    'bootenberg/row',
    {
        title: __( 'Bootstrap Row', 'bootenberg' ),
        description: __( 'Custom Column Block.', 'bootenberg'),
        category: 'layout',
        icon: 'columns',
        keywords: [
            __( 'Columns', 'bootenberg' ),
        ],
        attributes: {
        },

        edit: props => {

          const { attributes: { placeholder },
                className, setAttributes, isSelected  } = props;

                const classes = classnames(
                  className,
                  { 'row': true },
                );

                

          return (
          <div className={ classes }>

{!isSelected && (<InnerBlocks
    allowedBlocks={ ALLOWED_BLOCKS }
    template={ TEMPLATE }
/>)}


          </div>
            );
        },
        save: props => {
          const { attributes: { className }, setAttributes } = props;
          const classes = classnames(
            className,
            { 'row': true },
          );
          return (
            <div className={ classes }>
              <InnerBlocks.Content />
            </div>
          );
        },
    },
);
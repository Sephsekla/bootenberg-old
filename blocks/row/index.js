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

const TEMPLATE = [ [ 'bootenberg/column', {}] , [ 'bootenberg/column', {}] ];

/*const TEMPLATE = [ 
  [ 'bootenberg/column', {} ]
 ];*/

/**
 * Register example block
 */
export default registerBlockType(
    'bootenberg/row',
    {
        title: __( 'Bootstrap Row', 'bootenberg' ),
        description: __( 'Custom Row Block.', 'bootenberg'),
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
          <span>BOOTSTRAP ROW</span>

<InnerBlocks
    allowedBlocks={ ALLOWED_BLOCKS }
    ctemplate={ TEMPLATE }
/>


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
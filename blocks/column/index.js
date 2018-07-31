/**
 * Block dependencies
 */
import classnames from 'classnames';

const { __ } = wp.i18n;

const { Fragment } = wp.element;

const { registerBlockType } = wp.blocks;

const { InnerBlocks } = wp.editor;


/**
 * Register example block
 */
export default registerBlockType(
    'bootenberg/column',
    {
        title: __( 'Bootstrap Column', 'bootenberg' ),
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
                className, setAttributes,  } = props;

          return (
          <div className={ className }>

  <InnerBlocks/>

          </div>
            );
        },
        save: props => {
          const { attributes: { className }, setAttributes } = props;
          return (
            <div className={ className }>
              <InnerBlocks.Content />
            </div>
          );
        },
    },
);
////import PropTypes from 'prop-types';
////import className from 'classnames';
////function Button({
////    children,
////    primary,
////    secondary,
////    success,
////    warning,
////    danger,
////    outline,
////    rounded,
////   ...rest
////}) {
////    const classes = className('px-3 py-1.3 border',{
////        'border-blue-600 bg-blue-500 text-white':primary,
////        'border-green-600 bg-green-500 text-white':success,
////        'rounded-full': rounded
////    })
////    return (
////        <button className={classes} {...rest}>{children}</button>
////    )
////}

////Button.propTypes = {
////    checkVariationValue: ({primary,secondary,success,warning,danger}) => {
////        const count = Number(!!primary) + Number(!!secondary) +
////                      Number(!!success) + Number(!!warning) + Number(!!danger);
////        if(count > 1){
////            throw new Error('incorrect selection');
////        }
////    }
////}

////export default Button;

////// npm classnames.


import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(
        //rest.className, // we can pass extra css if we wamt
        'flex items-center px-3 py-1.5 border',
        {
            'border-blue-500 bg-blue-500 text-white': primary,
            'border-gray-900 bg-gray-900 text-white': secondary,
            'border-green-500 bg-green-500 text-white': success,
            'border-yellow-400 bg-yellow-400 text-white': warning,
            'border-red-500 bg-red-500 text-white': danger,
            'rounded-full': rounded,
           // 'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-black-900': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-400': outline && warning,
            'text-red-500': outline && danger,
        }
    );

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

        if (count > 1) {
            return new Error(
                'Only one of primary, secondary, success, warning, danger can be true'
            );
        }
    },
};

export default Button;

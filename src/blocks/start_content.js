const { registerBlockType  } = wp.blocks;
const { ToggleControl, PanelBody, PanelRow, SelectControl, __experimentalNumberControl: NumberControl  } = wp.components;
const { InspectorControls } = wp.editor;


registerBlockType( "lightning-paywall/gutenberg-start-block", {
    title: 'LP Pay-per-Post Start',
    icon: <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="517.000000pt" height="372.000000pt" viewBox="0 0 517.000000 372.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,372.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M45 3655 l-25 -24 0 -286 0 -286 25 -24 24 -25 284 0 c266 0 286 1
308 19 l24 19 0 297 0 297 -24 19 c-22 18 -42 19 -308 19 l-284 0 -24 -25z"/>
<path d="M785 3655 l-25 -24 0 -286 0 -286 25 -24 24 -25 470 0 471 0 -6 29
-6 29 216 -5 216 -6 0 287 0 287 -25 24 -24 25 -656 0 -656 0 -24 -25z"/>
<path d="M2276 3659 l-26 -20 0 -289 0 -288 418 -5 c387 -4 423 -5 500 -25 70
-19 111 -22 258 -22 97 0 184 4 194 10 10 5 23 24 29 41 14 42 15 525 1 566
-6 17 -22 35 -36 42 -18 8 -209 11 -668 11 -636 0 -644 0 -670 -21z"/>
<path d="M3755 3655 l-25 -24 0 -286 0 -286 25 -24 24 -25 656 0 656 0 24 25
25 24 0 286 0 286 -25 24 -24 25 -656 0 -656 0 -24 -25z"/>
<path d="M63 2930 c-12 -5 -26 -18 -32 -29 -7 -13 -11 -122 -11 -304 0 -283 0
-284 23 -305 l23 -22 661 0 662 0 20 26 c20 26 21 39 21 306 0 163 -4 287 -10
298 -5 10 -24 23 -41 29 -39 13 -1282 14 -1316 1z"/>
<path d="M1549 2929 c-46 -17 -49 -40 -49 -335 l0 -275 25 -25 c24 -24 29 -25
132 -22 l108 3 -3 324 c-1 178 -5 327 -8 332 -7 12 -172 10 -205 -2z"/>
<path d="M3479 2873 c80 -80 133 -180 152 -287 12 -70 8 -264 -6 -298 -7 -17
14 -18 363 -18 l371 0 20 26 c20 26 21 39 21 300 0 289 -3 313 -47 333 -16 8
-168 11 -483 11 l-460 0 69 -67z"/>
<path d="M4519 2929 c-46 -17 -49 -40 -49 -335 l0 -275 25 -24 24 -25 289 0
289 0 21 23 c22 23 22 29 22 309 0 266 -1 287 -19 309 l-19 24 -279 2 c-162 1
-289 -2 -304 -8z"/>
<path d="M2260 2460 l0 -190 305 0 c292 0 306 1 325 20 18 18 20 33 20 184 l0
163 -52 7 c-29 3 -176 6 -325 6 l-273 0 0 -190z"/>
<path d="M2990 2465 c0 -142 2 -157 20 -175 26 -26 114 -29 124 -4 12 32 6
165 -10 202 -17 43 -67 97 -106 118 l-28 15 0 -156z"/>
<path d="M40 2170 c-19 -19 -20 -33 -20 -310 0 -277 1 -291 20 -310 19 -19 33
-20 314 -20 l295 0 20 26 c20 26 21 39 21 304 0 265 -1 278 -21 304 l-20 26
-295 0 c-281 0 -295 -1 -314 -20z"/>
<path d="M781 2164 c-20 -26 -21 -38 -21 -304 0 -266 1 -278 21 -304 l21 -26
481 2 482 3 0 325 0 325 -482 3 -481 2 -21 -26z"/>
<path d="M2272 2178 c-7 -7 -12 -29 -12 -51 l0 -38 338 3 c328 3 338 4 389 26
28 13 61 35 74 48 l22 24 -399 0 c-298 0 -403 -3 -412 -12z"/>
<path d="M3569 2148 c-37 -73 -134 -160 -228 -206 -83 -40 -84 -41 -57 -52 15
-5 32 -10 37 -10 6 0 44 -15 85 -34 72 -34 172 -120 231 -201 l22 -30 -2 266
c-2 247 -3 269 -21 288 -28 31 -43 26 -67 -21z"/>
<path d="M3750 2168 c-19 -21 -20 -34 -20 -310 0 -275 1 -289 20 -308 20 -20
33 -20 685 -20 652 0 665 0 685 20 19 19 20 33 20 310 0 277 -1 291 -20 310
-20 20 -33 20 -685 20 l-664 0 -21 -22z"/>
<path d="M2260 1617 c0 -36 5 -68 12 -75 14 -14 898 -18 898 -4 0 20 -78 87
-129 111 l-56 26 -362 3 -363 3 0 -64z"/>
<path d="M42 1427 c-22 -23 -22 -29 -22 -309 0 -266 1 -287 19 -309 l19 -24
667 0 667 0 19 24 c18 22 19 42 19 306 0 270 -1 283 -21 309 l-20 26 -663 0
-663 0 -21 -23z"/>
<path d="M1529 1431 l-24 -19 -3 -278 c-2 -188 1 -286 8 -305 16 -39 49 -49
155 -49 l95 0 1 138 c1 75 2 226 3 334 l1 198 -106 0 c-90 0 -110 -3 -130 -19z"/>
<path d="M2260 1245 l0 -205 325 0 325 0 0 185 c0 172 -1 186 -20 205 -19 19
-33 20 -325 20 l-305 0 0 -205z"/>
<path d="M3012 1430 c-21 -20 -22 -29 -22 -195 0 -128 3 -175 12 -175 29 0
101 45 136 85 50 57 72 126 72 226 l0 79 -88 0 c-75 0 -92 -3 -110 -20z"/>
<path d="M3716 1428 c14 -41 7 -250 -10 -320 -22 -96 -79 -202 -144 -270 l-55
-58 412 0 c444 0 461 2 475 52 3 13 6 146 6 296 l0 273 -25 24 -24 25 -321 0
-321 0 7 -22z"/>
<path d="M4495 1425 l-25 -24 0 -275 c0 -183 4 -283 11 -300 20 -44 46 -47
343 -44 l278 3 19 24 c18 22 19 43 19 310 l0 288 -23 21 c-23 22 -29 22 -311
22 l-287 0 -24 -25z"/>
<path d="M45 685 l-25 -24 0 -286 0 -286 25 -24 24 -25 284 0 c266 0 286 1
308 19 l24 19 0 297 0 297 -24 19 c-22 18 -42 19 -308 19 l-284 0 -24 -25z"/>
<path d="M785 685 l-25 -24 0 -284 c0 -265 1 -286 19 -308 l19 -24 660 -3
c655 -2 659 -2 685 19 l27 20 0 271 0 271 -215 -6 -215 -5 6 49 7 49 -472 0
-472 0 -24 -25z"/>
<path d="M3303 679 c-142 -51 -235 -59 -665 -59 l-388 0 0 -267 c0 -148 4
-273 8 -279 21 -33 50 -34 691 -34 457 0 647 3 665 11 14 7 30 25 36 42 14 41
13 524 -1 566 -6 17 -19 36 -29 41 -10 6 -67 10 -127 9 -92 -1 -120 -5 -190
-30z"/>
<path d="M3755 685 l-25 -24 0 -286 0 -286 25 -24 24 -25 656 0 656 0 24 25
25 24 0 286 0 286 -25 24 -24 25 -656 0 -656 0 -24 -25z"/>
</g>
</svg>,
    category: 'widgets',
    keywords: [ 'paywall', 'start-paywall' ],
    attributes: {
        pay_block:{
            type: 'boolean',
            default: true
        },
        currency:{
            type: 'string',
        },
        price:{
            type: 'number'
        },
        duration_type:{
            type: 'string',
        },
        duration:{
            type: 'number'
        }
    },
    edit:props => {
        const {
            attributes: { pay_block, currency, duration_type, price, duration },
            setAttributes
        } = props;
        
        return (
            <div>
            <hr class="lnpw_pay__gutenberg_block_separator"></hr>
                <InspectorControls>
                <PanelBody
                                title="LP Paywall Text"
                                initialOpen={true}>
                            <PanelRow>
                            <ToggleControl
                                label="Enable paywall"
                                checked={  pay_block }
                                onChange={ ( checked ) => {
                                    setAttributes( { pay_block: checked } );
                                }}
                                value={ pay_block } />
                            </PanelRow>
                            <PanelRow>
                                <SelectControl 
                                label="Currency"
                            value={ currency } 
                            onChange={ (  selectedItem  ) => setAttributes( {currency:selectedItem} )}
                            options={ [
                                { value: '', label: 'Default' },
                                { value: 'SATS', label: 'SATS' },
                                { value: 'BTC', label: 'BTC' },
                                { value: 'EUR', label: 'EUR' },
                                { value: 'USD', label: 'USD' },
                            ] }/>
                            </PanelRow>
                            <PanelRow>
                            <NumberControl
                                    label="Price"
                                    value={ price }
                                    onChange={ ( nextValue ) => setAttributes( {price:Number(nextValue)} ) }
                                />
                            </PanelRow>
                            <PanelRow>
                                <SelectControl 
                                label="Duration type"
                            value={ duration_type } 
                            onChange={ (  selectedItem  ) => setAttributes( {duration_type:selectedItem} )}
                            options={ [
                                { value: '', label: 'Default' },
                                { value: 'minute', label: 'Minute' },
                                { value: 'hour', label: 'Hour' },
                                { value: 'week', label: 'Week' },
                                { value: 'month', label: 'Month' },
                                { value: 'year', label: 'Year' },
                                { value: 'onetime', label: 'Onetime' },
                                { value: 'unlimited', label: 'Unlimited' },
                            ] }/>
                            </PanelRow>
                            <PanelRow>
                            <NumberControl
                                    label="Duration"
                                    value={ duration }
                                    onChange={ ( nextValue ) => setAttributes( {duration:Number(nextValue)} ) }
                                />
                            </PanelRow>
                            </PanelBody>
                    </InspectorControls>
            </div>)
        },
    save:props => {return null}
});

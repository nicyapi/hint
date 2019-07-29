// autogenerated by scripts/create/create-metas.js
import { Category } from 'hint/dist/src/lib/enums/category';
import { HintScope } from 'hint/dist/src/lib/enums/hint-scope';
import { HintMetadata } from 'hint/dist/src/lib/types';

import { getMessage } from '../i18n.import';

const meta: HintMetadata = {
    docs: {
        category: Category.accessibility,
        description: getMessage('parsing_description', 'en'),
        name: getMessage('parsing_name', 'en')
    },
    /* istanbul ignore next */
    getDescription(language: string) {
        return getMessage('parsing_description', language);
    },
    /* istanbul ignore next */
    getName(language: string) {
        return getMessage('parsing_name', language);
    },
    id: 'axe/parsing',
    schema: [{
        additionalProperties: false,
        properties: {
            'duplicate-id': { enum: ['off', 'warning', 'error'], type: 'string' },
            'duplicate-id-active': { enum: ['off', 'warning', 'error'], type: 'string' },
            'duplicate-id-aria': { enum: ['off', 'warning', 'error'], type: 'string' },
            marquee: { enum: ['off', 'warning', 'error'], type: 'string' }
        }
    }],
    scope: HintScope.any
};

export default meta;
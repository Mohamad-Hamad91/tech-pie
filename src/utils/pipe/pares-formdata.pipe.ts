import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { deepParseJson } from 'deep-parse-json';
import * as _ from 'lodash';

type TParseFormDataJsonOptions = {
  except?: string[];
};

export class ParseFormDataJsonPipe implements PipeTransform {
  constructor(private options?: TParseFormDataJsonOptions) {}

  transform(value: any, _metadata: ArgumentMetadata) {
    const deserializedValue = deepParseJson(value);
    // console.log(`deserializedValue`, deserializedValue);
    return deserializedValue;
  }
}
<script lang="ts">
import type { ThemeInterface } from 'redoc/typings/theme'

export interface LabelsConfig {
  enum: string
  enumSingleValue: string
  enumArray: string
  default: string
  deprecated: string
  example: string
  examples: string
  recursive: string
  arrayOf: string
  webhook: string
  const: string
  noResultsFound: string
  download: string
  downloadSpecification: string
  responses: string
  callbackResponses: string
  requestSamples: string
  responseSamples: string
}

export interface RedocRawOptions {
  theme?: ThemeInterface
  scrollYOffset?: number | string | (() => number)
  hideHostname?: boolean | string
  expandResponses?: string | 'all'
  requiredPropsFirst?: boolean | string
  sortPropsAlphabetically?: boolean | string
  sortEnumValuesAlphabetically?: boolean | string
  sortOperationsAlphabetically?: boolean | string
  sortTagsAlphabetically?: boolean | string
  nativeScrollbars?: boolean | string
  pathInMiddlePanel?: boolean | string
  untrustedSpec?: boolean | string
  hideLoading?: boolean | string
  hideDownloadButton?: boolean | string
  downloadFileName?: string
  downloadDefinitionUrl?: string
  disableSearch?: boolean | string
  onlyRequiredInSamples?: boolean | string
  showExtensions?: boolean | string | string[]
  sideNavStyle?: 'summary-only' | 'path-only' | 'id-only'
  hideSingleRequestSampleTab?: boolean | string
  hideRequestPayloadSample?: boolean
  menuToggle?: boolean | string
  jsonSampleExpandLevel?: number | string | 'all'
  hideSchemaTitles?: boolean | string
  simpleOneOfTypeLabel?: boolean | string
  payloadSampleIdx?: number
  expandSingleSchemaField?: boolean | string
  schemaExpansionLevel?: number | string | 'all'
  showObjectSchemaExamples?: boolean | string
  showSecuritySchemeType?: boolean
  hideSecuritySection?: boolean
  unstable_ignoreMimeParameters?: boolean
  labels?: Partial<LabelsConfig>
  enumSkipQuotes?: boolean | string
  expandDefaultServerVariables?: boolean
  maxDisplayedEnumValues?: number
  ignoreNamedSchemas?: string[] | string
  hideSchemaPattern?: boolean
  generatedPayloadSamplesMaxDepth?: number
  nonce?: string
  hideFab?: boolean
  minCharacterLengthToInitSearch?: number
  showWebhookVerb?: boolean
}

export interface RedocContainerProps {
  specOrSpecUrl: string | any
  options?: RedocRawOptions
}
</script>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import * as redoc from 'redoc/bundles/redoc.standalone.js'

const props = defineProps<RedocContainerProps>()

const isMounted = ref<boolean>(false)

onMounted(() => {
  isMounted.value = true
})

watchEffect(() => {
  if (isMounted.value) {
    redoc.init(props.specOrSpecUrl, props.options, document.getElementById('redoc-container'))
  }
})
</script>

<template>
  <div id="redoc-container"></div>
</template>

/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * The `id` of a generation, typically used for async generations, that can be used to check the status of the generation or retrieve the result.
 * @minLength 64
 * @maxLength 64
 * @example "a6dc6c6e20acda010fe14d71f180658f2896ed9b4ec25aa99a6ff06c796987c4"
 */
export type GenerationID = string;

export interface ImageToVideoRequest {
  /**
   * The source image used in the video generation process.
   *
   * Supported Formats:
   * - jpeg
   * - png
   *
   * Supported Dimensions:
   * - 1024x576
   * - 576x1024
   * - 768x768
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * How strongly the video sticks to the original image. Use lower values to allow the model more freedom to make changes and higher values to correct motion distortions.
   * @min 0
   * @max 10
   * @default 1.8
   */
  cfg_scale?: number;
  /**
   * Lower values generally result in less motion in the output video, while higher values generally result in more motion. This parameter corresponds to the motion_bucket_id parameter from the [paper](https://static1.squarespace.com/static/6213c340453c3f502425776e/t/655ce779b9d47d342a93c890/1700587395994/stable_video_diffusion.pdf).
   * @min 1
   * @max 255
   * @default 127
   */
  motion_bucket_id?: number;
}

/**
 * Your request was flagged by our content moderation system.
 * @example {"id":"ed14db44362126aab3cbd25cca51ffe3","name":"content_moderation","errors":["Your request was flagged by our content moderation system, as a result your request was denied and you were not charged."]}
 */
export interface ContentModerationResponse {
  /**
   * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
   * you file, as it will greatly assist us in diagnosing the root cause of the problem.
   * @minLength 1
   * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
   */
  id: string;
  /**
   * Our content moderation system has flagged some part of your request and subsequently denied it.  You were not charged for this request.  While this may at times be frustrating, it is necessary to maintain the integrity of our platform and ensure a safe experience for all users.
   *
   * If you would like to provide feedback, please use the [Support Form](https://stabilityplatform.freshdesk.com/support/tickets/new).
   * @minLength 1
   */
  name: 'content_moderation';
  /**
   * One or more error messages indicating what went wrong.
   * @minItems 1
   * @example ["some-field: is required"]
   */
  errors: string[];
}

export interface InpaintingSearchModeRequestBody {
  /**
   * Controls how the model decides which areas to inpaint and which areas to leave alone.
   *
   * Specifying `mask` requires:
   *   - Provide an explicit mask image in the `mask` parameter
   *   - Use the alpha channel of the `image` parameter as the mask
   *
   * Specifying `search` requires:
   *   - Provide a small description of what to inpaint in the `search_prompt` parameter
   */
  mode: 'search';
  /**
   * Short description of what to inpaint in the `image`.
   * @example "glasses"
   */
  search_prompt: string;
  /**
   * The image you wish to inpaint.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
}

export interface InpaintingMaskingModeRequestBody {
  /**
   * Controls how the model decides which areas to inpaint and which areas to leave alone.
   *
   * Specifying `mask` requires:
   *   - Provide an explicit mask image in the `mask` parameter
   *   - Use the alpha channel of the `image` parameter as the mask
   *
   * Specifying `search` requires:
   *   - Provide a small description of what to inpaint in the `search_prompt` parameter
   */
  mode: 'mask';
  /**
   * Controls the strength of the inpainting process on a per-pixel basis, either via a
   * second image (passed into this parameter) or via the alpha channel of the `image` parameter.
   *
   * **Passing in a Mask**
   *
   * The image passed to this parameter should be a black and white image that represents,
   * at any pixel, the strength of inpainting based on how dark or light the given pixel is.
   * Completely black pixels represent no inpainting strength while completely white pixels
   * represent maximum strength.
   *
   * In the event the mask is a different size than the `image` parameter, it will be automatically resized.
   *
   * **Alpha Channel Support**
   *
   * If you don't provide an explicit mask, one will be derived from the alpha channel of the `image` parameter.
   * Transparent pixels will be inpainted while opaque pixels will be preserved.
   *
   * In the event an `image` with an alpha channel is provided along with a `mask`, the `mask` will take precedence.
   * @format binary
   * @example "./some/image.png"
   */
  mask?: File;
  /**
   * The image you wish to inpaint.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
}

/**
 * The name of your application, used to help us communicate app-specific debugging or moderation issues to you.
 * @maxLength 256
 * @example "my-awesome-app"
 */
export type StabilityClientID = string;

/**
 * A unique identifier for your end user. Used to help us communicate user-specific debugging or moderation issues to you. Feel free to obfuscate this value to protect user privacy.
 * @maxLength 256
 * @example "DiscordUser#9999"
 */
export type StabilityClientUserID = string;

/**
 * The version of your application, used to help us communicate version-specific debugging or moderation issues to you.
 * @maxLength 256
 * @example "1.2.1"
 */
export type StabilityClientVersion = string;

/**
 * Controls the likelihood of creating additional details not heavily conditioned by the init image.
 * @min 0.2
 * @max 0.5
 * @default 0.35
 */
export type Creativity = number;

export interface Engine {
  description: string;
  /**
   * Unique identifier for the engine
   * @example "stable-diffusion-v1-6"
   */
  id: string;
  /**
   * Name of the engine
   * @example "Stable Diffusion XL v1.0"
   */
  name: string;
  /**
   * The type of content this engine produces
   * @example "PICTURE"
   */
  type: 'AUDIO' | 'CLASSIFICATION' | 'PICTURE' | 'STORAGE' | 'TEXT' | 'VIDEO';
}

export interface Error {
  /**
   * A unique identifier for this particular occurrence of the problem.
   * @example "296a972f-666a-44a1-a3df-c9c28a1f56c0"
   */
  id: string;
  /**
   * The short-name of this class of errors e.g. `bad_request`.
   * @example "bad_request"
   */
  name: string;
  /**
   * A human-readable explanation specific to this occurrence of the problem.
   * @example "Header parameter Authorization is required, but not found"
   */
  message: string;
}

/**
 * How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt)
 * @min 0
 * @max 35
 * @default 7
 * @example 7
 */
export type CfgScale = number;

/**
 * @default "NONE"
 * @example "FAST_BLUE"
 */
export enum ClipGuidancePreset {
  FAST_BLUE = 'FAST_BLUE',
  FAST_GREEN = 'FAST_GREEN',
  NONE = 'NONE',
  SIMPLE = 'SIMPLE',
  SLOW = 'SLOW',
  SLOWER = 'SLOWER',
  SLOWEST = 'SLOWEST',
}

/**
 * Desired height of the output image.  Only one of `width` or `height` may be specified.
 * @min 512
 */
export type UpscaleImageHeight = number;

/**
 * Desired width of the output image.  Only one of `width` or `height` may be specified.
 * @min 512
 */
export type UpscaleImageWidth = number;

/**
 * Height of the image to generate, in pixels, in an increment divisible by 64.
 * @min 128
 * @multipleOf 64
 * @default 512
 * @example 512
 */
export type DiffuseImageHeight = number;

/**
 * Width of the image to generate, in pixels, in an increment divisible by 64.
 * @min 128
 * @multipleOf 64
 * @default 512
 * @example 512
 */
export type DiffuseImageWidth = number;

/**
 * Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you.
 * @example "K_DPM_2_ANCESTRAL"
 */
export enum Sampler {
  DDIM = 'DDIM',
  DDPM = 'DDPM',
  KDPMPP2M = 'K_DPMPP_2M',
  KDPMPP2SANCESTRAL = 'K_DPMPP_2S_ANCESTRAL',
  KDPM2 = 'K_DPM_2',
  KDPM2ANCESTRAL = 'K_DPM_2_ANCESTRAL',
  K_EULER = 'K_EULER',
  K_EULER_ANCESTRAL = 'K_EULER_ANCESTRAL',
  K_HEUN = 'K_HEUN',
  K_LMS = 'K_LMS',
}

/**
 * Number of images to generate
 * @min 1
 * @max 10
 * @default 1
 * @example 1
 */
export type Samples = number;

/**
 * Random noise seed (omit this option or use `0` for a random seed)
 * @min 0
 * @max 4294967295
 * @default 0
 * @example 0
 */
export type Seed = number;

/**
 * Number of diffusion steps to run.
 * @min 10
 * @max 50
 * @default 30
 * @example 50
 */
export type Steps = number;

/**
 * Extra parameters passed to the engine.
 * These parameters are used for in-development or experimental features and may change
 * without warning, so please use with caution.
 */
export type Extras = object;

/**
 * Pass in a style preset to guide the image model towards a particular style.
 * This list of style presets is subject to change.
 */
export enum StylePreset {
  Enhance = 'enhance',
  Anime = 'anime',
  Photographic = 'photographic',
  DigitalArt = 'digital-art',
  ComicBook = 'comic-book',
  FantasyArt = 'fantasy-art',
  LineArt = 'line-art',
  AnalogFilm = 'analog-film',
  NeonPunk = 'neon-punk',
  Isometric = 'isometric',
  LowPoly = 'low-poly',
  Origami = 'origami',
  ModelingCompound = 'modeling-compound',
  Cinematic = 'cinematic',
  Value3DModel = '3d-model',
  PixelArt = 'pixel-art',
  TileTexture = 'tile-texture',
}

/** Text prompt for image generation */
export interface TextPrompt {
  /**
   * The prompt itself
   * @maxLength 2000
   * @example "A lighthouse on a cliff"
   */
  text: string;
  /**
   * Weight of the prompt (use negative numbers for negative prompts)
   * @format float
   * @example 0.8167237
   */
  weight?: number;
}

/**
 * TextPrompts
 * An array of text prompts to use for generation.
 *
 * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
 *
 * ```
 * "text_prompts": [
 *   {
 *     "text": "A lighthouse on a cliff",
 *     "weight": 0.5
 *   }
 * ]
 * ```
 * @minItems 1
 */
export type TextPromptsForTextToImage = TextPrompt[];

/**
 * An array of text prompts to use for generation.
 *
 * Due to how arrays are represented in `multipart/form-data` requests, prompts must adhere to the format `text_prompts[index][text|weight]`,
 * where `index` is some integer used to tie the text and weight together.  While `index` does not have to be sequential, duplicate entries
 * will override previous entries, so it is recommended to use sequential indices.
 *
 * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
 * ```
 * text_prompts[0][text]: "A lighthouse on a cliff"
 * text_prompts[0][weight]: 0.5
 * ```
 *
 * To add another prompt to that request simply provide the values under a new `index`:
 *
 * ```
 * text_prompts[0][text]: "A lighthouse on a cliff"
 * text_prompts[0][weight]: 0.5
 * text_prompts[1][text]: "land, ground, dirt, grass"
 * text_prompts[1][weight]: -0.9
 * ```
 * @minItems 1
 */
export type TextPrompts = TextPrompt[];

/**
 * The image to upscale using ESRGAN.
 * @format binary
 * @example "<image binary>"
 */
export type InputImage = File;

/**
 * Image used to initialize the diffusion process, in lieu of random noise.
 * @format binary
 * @example "<image binary>"
 */
export type InitImage = File;

/**
 * How much influence the `init_image` has on the diffusion process. Values close to `1` will yield images very similar to the `init_image` while values close to `0` will yield images wildly different than the `init_image`. The behavior of this is meant to mirror DreamStudio's "Image Strength" slider.  <br/> <br/> This parameter is just an alternate way to set `step_schedule_start`, which is done via the calculation `1 - image_strength`. For example, passing in an Image Strength of 35% (`0.35`) would result in a `step_schedule_start` of `0.65`.
 * @format float
 * @min 0
 * @max 1
 * @default 0.35
 * @example 0.4
 */
export type InitImageStrength = number;

/**
 * Whether to use `image_strength` or `step_schedule_*` to control how much influence the `init_image` has on the result.
 * @default "IMAGE_STRENGTH"
 */
export enum InitImageMode {
  IMAGE_STRENGTH = 'IMAGE_STRENGTH',
  STEP_SCHEDULE = 'STEP_SCHEDULE',
}

/**
 * Skips a proportion of the start of the diffusion steps, allowing the init_image to influence the final generated image.  Lower values will result in more influence from the init_image, while higher values will result in more influence from the diffusion steps.  (e.g. a value of `0` would simply return you the init_image, where a value of `1` would return you a completely different image.)
 * @min 0
 * @max 1
 * @default 0.65
 * @example 0.4
 */
export type StepScheduleStart = number;

/**
 * Skips a proportion of the end of the diffusion steps, allowing the init_image to influence the final generated image.  Lower values will result in more influence from the init_image, while higher values will result in more influence from the diffusion steps.
 * @min 0
 * @max 1
 * @example 0.01
 */
export type StepScheduleEnd = number;

/**
 * Optional grayscale mask that allows for influence over which pixels are eligible for diffusion and at what strength. Must be the same dimensions as the `init_image`. Use the `mask_source` option to specify whether the white or black pixels should be inpainted.
 * @format binary
 * @example "<image binary>"
 */
export type MaskImage = File;

/**
 * For any given pixel, the mask determines the strength of generation on a linear scale.  This parameter determines where to source the mask from:
 * - `MASK_IMAGE_WHITE` will use the white pixels of the mask_image as the mask, where white pixels are completely replaced and black pixels are unchanged
 * - `MASK_IMAGE_BLACK` will use the black pixels of the mask_image as the mask, where black pixels are completely replaced and white pixels are unchanged
 * - `INIT_IMAGE_ALPHA` will use the alpha channel of the init_image as the mask, where fully transparent pixels are completely replaced and fully opaque pixels are unchanged
 */
export type MaskSource = string;

/** Represents the optional parameters that can be passed to any generation request. */
export interface GenerationRequestOptionalParams {
  /** How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt) */
  cfg_scale?: CfgScale;
  clip_guidance_preset?: ClipGuidancePreset;
  /** Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you. */
  sampler?: Sampler;
  /** Number of images to generate */
  samples?: Samples;
  /** Random noise seed (omit this option or use `0` for a random seed) */
  seed?: Seed;
  /** Number of diffusion steps to run. */
  steps?: Steps;
  /**
   * Pass in a style preset to guide the image model towards a particular style.
   * This list of style presets is subject to change.
   */
  style_preset?: StylePreset;
  /**
   * Extra parameters passed to the engine.
   * These parameters are used for in-development or experimental features and may change
   * without warning, so please use with caution.
   */
  extras?: Extras;
}

export interface RealESRGANUpscaleRequestBody {
  /** The image to upscale using ESRGAN. */
  image: InputImage;
  /** Desired width of the output image.  Only one of `width` or `height` may be specified. */
  width?: UpscaleImageWidth;
  /** Desired height of the output image.  Only one of `width` or `height` may be specified. */
  height?: UpscaleImageHeight;
}

export type ImageToImageRequestBody = BaseImageToImageRequestBody &
  (
    | BaseImageToImageRequestBodyInitImageModeMapping<
        InitImageMode.IMAGE_STRENGTH,
        ImageToImageUsingImageStrengthRequestBody
      >
    | BaseImageToImageRequestBodyInitImageModeMapping<
        InitImageMode.STEP_SCHEDULE,
        ImageToImageUsingStepScheduleRequestBody
      >
  );

export type ImageToImageUsingImageStrengthRequestBody = {
  /**
   * An array of text prompts to use for generation.
   *
   * Due to how arrays are represented in `multipart/form-data` requests, prompts must adhere to the format `text_prompts[index][text|weight]`,
   * where `index` is some integer used to tie the text and weight together.  While `index` does not have to be sequential, duplicate entries
   * will override previous entries, so it is recommended to use sequential indices.
   *
   * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * ```
   *
   * To add another prompt to that request simply provide the values under a new `index`:
   *
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * text_prompts[1][text]: "land, ground, dirt, grass"
   * text_prompts[1][weight]: -0.9
   * ```
   */
  text_prompts: TextPrompts;
  /** Image used to initialize the diffusion process, in lieu of random noise. */
  init_image: InitImage;
  /** Whether to use `image_strength` or `step_schedule_*` to control how much influence the `init_image` has on the result. */
  init_image_mode?: InitImageMode;
  /** How much influence the `init_image` has on the diffusion process. Values close to `1` will yield images very similar to the `init_image` while values close to `0` will yield images wildly different than the `init_image`. The behavior of this is meant to mirror DreamStudio's "Image Strength" slider.  <br/> <br/> This parameter is just an alternate way to set `step_schedule_start`, which is done via the calculation `1 - image_strength`. For example, passing in an Image Strength of 35% (`0.35`) would result in a `step_schedule_start` of `0.65`. */
  image_strength?: InitImageStrength;
} & GenerationRequestOptionalParams;

export type ImageToImageUsingStepScheduleRequestBody = {
  /**
   * An array of text prompts to use for generation.
   *
   * Due to how arrays are represented in `multipart/form-data` requests, prompts must adhere to the format `text_prompts[index][text|weight]`,
   * where `index` is some integer used to tie the text and weight together.  While `index` does not have to be sequential, duplicate entries
   * will override previous entries, so it is recommended to use sequential indices.
   *
   * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * ```
   *
   * To add another prompt to that request simply provide the values under a new `index`:
   *
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * text_prompts[1][text]: "land, ground, dirt, grass"
   * text_prompts[1][weight]: -0.9
   * ```
   */
  text_prompts: TextPrompts;
  /** Image used to initialize the diffusion process, in lieu of random noise. */
  init_image: InitImage;
  /** Whether to use `image_strength` or `step_schedule_*` to control how much influence the `init_image` has on the result. */
  init_image_mode?: InitImageMode;
  /** Skips a proportion of the start of the diffusion steps, allowing the init_image to influence the final generated image.  Lower values will result in more influence from the init_image, while higher values will result in more influence from the diffusion steps.  (e.g. a value of `0` would simply return you the init_image, where a value of `1` would return you a completely different image.) */
  step_schedule_start?: StepScheduleStart;
  /** Skips a proportion of the end of the diffusion steps, allowing the init_image to influence the final generated image.  Lower values will result in more influence from the init_image, while higher values will result in more influence from the diffusion steps. */
  step_schedule_end?: StepScheduleEnd;
} & GenerationRequestOptionalParams;

export type MaskingRequestBody = BaseMaskingRequestBody &
  (
    | BaseMaskingRequestBodyMaskSourceMapping<'MASK_IMAGE_BLACK', MaskingUsingMaskImageRequestBody>
    | BaseMaskingRequestBodyMaskSourceMapping<'MASK_IMAGE_WHITE', MaskingUsingMaskImageRequestBody>
    | BaseMaskingRequestBodyMaskSourceMapping<'INIT_IMAGE_ALPHA', MaskingUsingInitImageAlphaRequestBody>
  );

export type MaskingUsingMaskImageRequestBody = {
  /**
   * An array of text prompts to use for generation.
   *
   * Due to how arrays are represented in `multipart/form-data` requests, prompts must adhere to the format `text_prompts[index][text|weight]`,
   * where `index` is some integer used to tie the text and weight together.  While `index` does not have to be sequential, duplicate entries
   * will override previous entries, so it is recommended to use sequential indices.
   *
   * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * ```
   *
   * To add another prompt to that request simply provide the values under a new `index`:
   *
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * text_prompts[1][text]: "land, ground, dirt, grass"
   * text_prompts[1][weight]: -0.9
   * ```
   */
  text_prompts: TextPrompts;
  /** Image used to initialize the diffusion process, in lieu of random noise. */
  init_image: InitImage;
  /**
   * For any given pixel, the mask determines the strength of generation on a linear scale.  This parameter determines where to source the mask from:
   * - `MASK_IMAGE_WHITE` will use the white pixels of the mask_image as the mask, where white pixels are completely replaced and black pixels are unchanged
   * - `MASK_IMAGE_BLACK` will use the black pixels of the mask_image as the mask, where black pixels are completely replaced and white pixels are unchanged
   * - `INIT_IMAGE_ALPHA` will use the alpha channel of the init_image as the mask, where fully transparent pixels are completely replaced and fully opaque pixels are unchanged
   */
  mask_source: MaskSource;
  /** Optional grayscale mask that allows for influence over which pixels are eligible for diffusion and at what strength. Must be the same dimensions as the `init_image`. Use the `mask_source` option to specify whether the white or black pixels should be inpainted. */
  mask_image: MaskImage;
} & GenerationRequestOptionalParams;

export type MaskingUsingInitImageAlphaRequestBody = {
  /**
   * An array of text prompts to use for generation.
   *
   * Due to how arrays are represented in `multipart/form-data` requests, prompts must adhere to the format `text_prompts[index][text|weight]`,
   * where `index` is some integer used to tie the text and weight together.  While `index` does not have to be sequential, duplicate entries
   * will override previous entries, so it is recommended to use sequential indices.
   *
   * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * ```
   *
   * To add another prompt to that request simply provide the values under a new `index`:
   *
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * text_prompts[1][text]: "land, ground, dirt, grass"
   * text_prompts[1][weight]: -0.9
   * ```
   */
  text_prompts: TextPrompts;
  /** Image used to initialize the diffusion process, in lieu of random noise. */
  init_image: InitImage;
  /**
   * For any given pixel, the mask determines the strength of generation on a linear scale.  This parameter determines where to source the mask from:
   * - `MASK_IMAGE_WHITE` will use the white pixels of the mask_image as the mask, where white pixels are completely replaced and black pixels are unchanged
   * - `MASK_IMAGE_BLACK` will use the black pixels of the mask_image as the mask, where black pixels are completely replaced and white pixels are unchanged
   * - `INIT_IMAGE_ALPHA` will use the alpha channel of the init_image as the mask, where fully transparent pixels are completely replaced and fully opaque pixels are unchanged
   */
  mask_source: MaskSource;
} & GenerationRequestOptionalParams;

/** @example {"cfg_scale":7,"height":512,"width":512,"sampler":"K_DPM_2_ANCESTRAL","samples":1,"seed":0,"steps":30,"text_prompts":[{"text":"A lighthouse on a cliff","weight":1}]} */
export type TextToImageRequestBody = {
  /** Height of the image to generate, in pixels, in an increment divisible by 64. */
  height?: DiffuseImageHeight;
  /** Width of the image to generate, in pixels, in an increment divisible by 64. */
  width?: DiffuseImageWidth;
  /**
   * An array of text prompts to use for generation.
   *
   * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
   *
   * ```
   * "text_prompts": [
   *   {
   *     "text": "A lighthouse on a cliff",
   *     "weight": 0.5
   *   }
   * ]
   * ```
   */
  text_prompts: TextPromptsForTextToImage;
} & GenerationRequestOptionalParams;

export interface AccountResponseBody {
  /**
   * The user's email
   * @format email
   * @example "example@stability.ai"
   */
  email: string;
  /**
   * The user's ID
   * @example "user-1234"
   */
  id: string;
  /**
   * The user's organizations
   * @example [{"id":"org-5678","name":"Another Organization","role":"MEMBER","is_default":true},{"id":"org-1234","name":"My Organization","role":"MEMBER","is_default":false}]
   */
  organizations: OrganizationMembership[];
  /**
   * The user's profile picture
   * @format uri
   * @example "https://api.stability.ai/example.png"
   */
  profile_picture?: string;
}

/** @example {"credits":0.07903292496944721} */
export interface BalanceResponseBody {
  /**
   * The balance of the account/organization associated with the API key
   * @format double
   * @example 0.41122252265928866
   */
  credits: number;
}

/**
 * The engines available to your user/organization
 * @example [{"description":"Stability-AI Stable Diffusion v1.6","id":"stable-diffusion-v1-6","name":"Stable Diffusion v1.6","type":"PICTURE"},{"description":"Stability-AI Stable Diffusion XL v1.0","id":"stable-diffusion-xl-1024-v1-0","name":"Stable Diffusion XL v1.0","type":"PICTURE"}]
 */
export type ListEnginesResponseBody = Engine[];

/**
 * The result of the generation process.
 * - `SUCCESS` indicates success
 * - `ERROR` indicates an error
 * - `CONTENT_FILTERED` indicates the result affected by the content filter and may be blurred.
 *
 * This header is only present when the `Accept` is set to `image/png`.  Otherwise it is returned in the response body.
 */
export enum FinishReason {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  CONTENT_FILTERED = 'CONTENT_FILTERED',
}

/** @example [{"base64":"...very long string...","finishReason":"SUCCESS","seed":1050625087},{"base64":"...very long string...","finishReason":"CONTENT_FILTERED","seed":1229191277}] */
export interface Image {
  /** Image encoded in base64 */
  base64?: string;
  /** @example "CONTENT_FILTERED" */
  finishReason?: 'SUCCESS' | 'ERROR' | 'CONTENT_FILTERED';
  /**
   * The seed associated with this image
   * @example 1229191277
   */
  seed?: number;
}

export interface OrganizationMembership {
  /** @example "org-123456" */
  id: string;
  /** @example false */
  is_default: boolean;
  /** @example "My Organization" */
  name: string;
  /** @example "MEMBER" */
  role: string;
}

interface BaseImageToImageRequestBody {
  /**
   * An array of text prompts to use for generation.
   *
   * Due to how arrays are represented in `multipart/form-data` requests, prompts must adhere to the format `text_prompts[index][text|weight]`,
   * where `index` is some integer used to tie the text and weight together.  While `index` does not have to be sequential, duplicate entries
   * will override previous entries, so it is recommended to use sequential indices.
   *
   * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * ```
   *
   * To add another prompt to that request simply provide the values under a new `index`:
   *
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * text_prompts[1][text]: "land, ground, dirt, grass"
   * text_prompts[1][weight]: -0.9
   * ```
   */
  text_prompts: TextPrompts;
  /** Image used to initialize the diffusion process, in lieu of random noise. */
  init_image: InitImage;
  /** Whether to use `image_strength` or `step_schedule_*` to control how much influence the `init_image` has on the result. */
  init_image_mode?: InitImageMode;
  /** How much influence the `init_image` has on the diffusion process. Values close to `1` will yield images very similar to the `init_image` while values close to `0` will yield images wildly different than the `init_image`. The behavior of this is meant to mirror DreamStudio's "Image Strength" slider.  <br/> <br/> This parameter is just an alternate way to set `step_schedule_start`, which is done via the calculation `1 - image_strength`. For example, passing in an Image Strength of 35% (`0.35`) would result in a `step_schedule_start` of `0.65`. */
  image_strength?: InitImageStrength;
  /** Skips a proportion of the start of the diffusion steps, allowing the init_image to influence the final generated image.  Lower values will result in more influence from the init_image, while higher values will result in more influence from the diffusion steps.  (e.g. a value of `0` would simply return you the init_image, where a value of `1` would return you a completely different image.) */
  step_schedule_start?: StepScheduleStart;
  /** Skips a proportion of the end of the diffusion steps, allowing the init_image to influence the final generated image.  Lower values will result in more influence from the init_image, while higher values will result in more influence from the diffusion steps. */
  step_schedule_end?: StepScheduleEnd;
  /** How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt) */
  cfg_scale?: CfgScale;
  clip_guidance_preset?: ClipGuidancePreset;
  /** Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you. */
  sampler?: Sampler;
  /** Number of images to generate */
  samples?: Samples;
  /** Random noise seed (omit this option or use `0` for a random seed) */
  seed?: Seed;
  /** Number of diffusion steps to run. */
  steps?: Steps;
  /**
   * Pass in a style preset to guide the image model towards a particular style.
   * This list of style presets is subject to change.
   */
  style_preset?: StylePreset;
  /**
   * Extra parameters passed to the engine.
   * These parameters are used for in-development or experimental features and may change
   * without warning, so please use with caution.
   */
  extras?: Extras;
}

type BaseImageToImageRequestBodyInitImageModeMapping<Key, Type> = {
  init_image_mode: Key;
} & Type;

interface BaseMaskingRequestBody {
  /** Image used to initialize the diffusion process, in lieu of random noise. */
  init_image: InitImage;
  /**
   * For any given pixel, the mask determines the strength of generation on a linear scale.  This parameter determines where to source the mask from:
   * - `MASK_IMAGE_WHITE` will use the white pixels of the mask_image as the mask, where white pixels are completely replaced and black pixels are unchanged
   * - `MASK_IMAGE_BLACK` will use the black pixels of the mask_image as the mask, where black pixels are completely replaced and white pixels are unchanged
   * - `INIT_IMAGE_ALPHA` will use the alpha channel of the init_image as the mask, where fully transparent pixels are completely replaced and fully opaque pixels are unchanged
   */
  mask_source: MaskSource;
  /** Optional grayscale mask that allows for influence over which pixels are eligible for diffusion and at what strength. Must be the same dimensions as the `init_image`. Use the `mask_source` option to specify whether the white or black pixels should be inpainted. */
  mask_image?: MaskImage;
  /**
   * An array of text prompts to use for generation.
   *
   * Due to how arrays are represented in `multipart/form-data` requests, prompts must adhere to the format `text_prompts[index][text|weight]`,
   * where `index` is some integer used to tie the text and weight together.  While `index` does not have to be sequential, duplicate entries
   * will override previous entries, so it is recommended to use sequential indices.
   *
   * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * ```
   *
   * To add another prompt to that request simply provide the values under a new `index`:
   *
   * ```
   * text_prompts[0][text]: "A lighthouse on a cliff"
   * text_prompts[0][weight]: 0.5
   * text_prompts[1][text]: "land, ground, dirt, grass"
   * text_prompts[1][weight]: -0.9
   * ```
   */
  text_prompts: TextPrompts;
  /** How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt) */
  cfg_scale?: CfgScale;
  clip_guidance_preset?: ClipGuidancePreset;
  /** Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you. */
  sampler?: Sampler;
  /** Number of images to generate */
  samples?: Samples;
  /** Random noise seed (omit this option or use `0` for a random seed) */
  seed?: Seed;
  /** Number of diffusion steps to run. */
  steps?: Steps;
  /**
   * Pass in a style preset to guide the image model towards a particular style.
   * This list of style presets is subject to change.
   */
  style_preset?: StylePreset;
  /**
   * Extra parameters passed to the engine.
   * These parameters are used for in-development or experimental features and may change
   * without warning, so please use with caution.
   */
  extras?: Extras;
}

type BaseMaskingRequestBodyMaskSourceMapping<Key, Type> = {
  mask_source: Key;
} & Type;

export interface GenerationImageToVideoCreateData {
  /** The `id` of a generation, typically used for async generations, that can be used to check the status of the generation or retrieve the result. */
  id: GenerationID;
}

export type GenerationImageToVideoCreateError = {
  /**
   * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
   * you file, as it will greatly assist us in diagnosing the root cause of the problem.
   * @minLength 1
   * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
   */
  id: string;
  /**
   * Short-hand name for an error, useful for discriminating between errors with the same status code.
   * @minLength 1
   * @example "bad_request"
   */
  name: string;
  /**
   * One or more error messages indicating what went wrong.
   * @minItems 1
   * @example ["some-field: is required"]
   */
  errors: string[];
};

/**
 * The bytes of the generated video.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type GenerationImageToVideoResultDetailData = File;

export type GenerationImageToVideoResultDetailError = {
  /**
   * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
   * you file, as it will greatly assist us in diagnosing the root cause of the problem.
   * @minLength 1
   * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
   */
  id: string;
  /**
   * Short-hand name for an error, useful for discriminating between errors with the same status code.
   * @minLength 1
   * @example "bad_request"
   */
  name: string;
  /**
   * One or more error messages indicating what went wrong.
   * @minItems 1
   * @example ["some-field: is required"]
   */
  errors: string[];
};

export interface GenerationStableImageUpscaleCreatePayload {
  /**
   * The image you wish to upscale.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 1,048,576 pixels
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Indicates how creative the model should be when upscaling an image.
   * Higher values will result in more details being added to the image during upscaling.
   * @min 0.1
   * @max 0.5
   * @default 0.3
   */
  creativity?: number;
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
}

export interface GenerationStableImageUpscaleCreateData {
  /** The `id` of a generation, typically used for async generations, that can be used to check the status of the generation or retrieve the result. */
  id: GenerationID;
}

export type GenerationStableImageUpscaleCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type GenerationStableImageUpscaleResultDetailData = File;

export type GenerationStableImageUpscaleResultDetailError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export type GenerationStableImageInpaintCreatePayload =
  | ({
      mode: 'search';
    } & InpaintingSearchModeRequestBody)
  | ({
      mode: 'mask';
    } & InpaintingMaskingModeRequestBody);

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type GenerationStableImageInpaintCreateData = File;

export type GenerationStableImageInpaintCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface ImageToVideoCreateData {
  /** The `id` of a generation, typically used for async generations, that can be used to check the status of the generation or retrieve the result. */
  id: GenerationID;
}

export type ImageToVideoCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

/**
 * The bytes of the generated video.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type ImageToVideoResultDetailData = File;

export type ImageToVideoResultDetailError = {
  /**
   * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
   * you file, as it will greatly assist us in diagnosing the root cause of the problem.
   * @minLength 1
   * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
   */
  id: string;
  /**
   * Short-hand name for an error, useful for discriminating between errors with the same status code.
   * @minLength 1
   * @example "bad_request"
   */
  name: string;
  /**
   * One or more error messages indicating what went wrong.
   * @minItems 1
   * @example ["some-field: is required"]
   */
  errors: string[];
};

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type ResultsDetailData = File;

export type ResultsDetailError = {
  /**
   * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
   * you file, as it will greatly assist us in diagnosing the root cause of the problem.
   * @minLength 1
   * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
   */
  id: string;
  /**
   * Short-hand name for an error, useful for discriminating between errors with the same status code.
   * @minLength 1
   * @example "bad_request"
   */
  name: string;
  /**
   * One or more error messages indicating what went wrong.
   * @minItems 1
   * @example ["some-field: is required"]
   */
  errors: string[];
};

export interface StableImageUpscaleConservativeCreatePayload {
  /**
   * The image you wish to upscale.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * - The aspect ratio must be between 1:2.5 and 2.5:1
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
  /** Controls the likelihood of creating additional details not heavily conditioned by the init image. */
  creativity?: Creativity;
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageUpscaleConservativeCreateData = File;

export type StableImageUpscaleConservativeCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageUpscaleCreativeCreatePayload {
  /**
   * The image you wish to upscale.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 1,048,576 pixels
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Indicates how creative the model should be when upscaling an image.
   * Higher values will result in more details being added to the image during upscaling.
   * @min 0.1
   * @max 0.5
   * @default 0.3
   */
  creativity?: number;
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
}

export interface StableImageUpscaleCreativeCreateData {
  /** The `id` of a generation, typically used for async generations, that can be used to check the status of the generation or retrieve the result. */
  id: GenerationID;
}

export type StableImageUpscaleCreativeCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageUpscaleCreativeResultDetailData = File;

export type StableImageUpscaleCreativeResultDetailError = {
  /**
   * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
   * you file, as it will greatly assist us in diagnosing the root cause of the problem.
   * @minLength 1
   * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
   */
  id: string;
  /**
   * Short-hand name for an error, useful for discriminating between errors with the same status code.
   * @minLength 1
   * @example "bad_request"
   */
  name: string;
  /**
   * One or more error messages indicating what went wrong.
   * @minItems 1
   * @example ["some-field: is required"]
   */
  errors: string[];
};

export interface StableImageUpscaleFastCreatePayload {
  /**
   * The image you wish to upscale.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Width must be between 32 and 1,536 pixels
   * - Height must be between 32 and 1,536 pixels
   * - Total pixel count must be between 1,024 and 1,048,576 pixels
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageUpscaleFastCreateData = File;

export type StableImageUpscaleFastCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageEditEraseCreatePayload {
  /**
   * The image you wish to erase from.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * Controls the strength of the inpainting process on a per-pixel basis, either via a
   * second image (passed into this parameter) or via the alpha channel of the `image` parameter.
   *
   * **Passing in a Mask**
   *
   * The image passed to this parameter should be a black and white image that represents,
   * at any pixel, the strength of inpainting based on how dark or light the given pixel is.
   * Completely black pixels represent no inpainting strength while completely white pixels
   * represent maximum strength.
   *
   * In the event the mask is a different size than the `image` parameter, it will be automatically resized.
   *
   * **Alpha Channel Support**
   *
   * If you don't provide an explicit mask, one will be derived from the alpha channel of the `image` parameter.
   * Transparent pixels will be inpainted while opaque pixels will be preserved.
   *
   * In the event an `image` with an alpha channel is provided along with a `mask`, the `mask` will take precedence.
   * @format binary
   * @example "./some/image.png"
   */
  mask?: File;
  /**
   * Grows the edges of the mask outward in all directions by the specified number of pixels. The expanded area around the mask will be blurred, which can help smooth the transition between inpainted content and the original image.
   *
   * Try this parameter if you notice seams or rough edges around the inpainted content.
   *
   * > Note: Excessive growth may obscure fine details in the mask and/or merge nearby masked regions.
   * @min 0
   * @max 20
   * @default 5
   */
  grow_mask?: number;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageEditEraseCreateData = File;

export type StableImageEditEraseCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageEditInpaintCreatePayload {
  /**
   * The image you wish to inpaint.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * Controls the strength of the inpainting process on a per-pixel basis, either via a
   * second image (passed into this parameter) or via the alpha channel of the `image` parameter.
   *
   * **Passing in a Mask**
   *
   * The image passed to this parameter should be a black and white image that represents,
   * at any pixel, the strength of inpainting based on how dark or light the given pixel is.
   * Completely black pixels represent no inpainting strength while completely white pixels
   * represent maximum strength.
   *
   * In the event the mask is a different size than the `image` parameter, it will be automatically resized.
   *
   * **Alpha Channel Support**
   *
   * If you don't provide an explicit mask, one will be derived from the alpha channel of the `image` parameter.
   * Transparent pixels will be inpainted while opaque pixels will be preserved.
   *
   * In the event an `image` with an alpha channel is provided along with a `mask`, the `mask` will take precedence.
   * @format binary
   * @example "./some/image.png"
   */
  mask?: File;
  /**
   * Grows the edges of the mask outward in all directions by the specified number of pixels. The expanded area around the mask will be blurred, which can help smooth the transition between inpainted content and the original image.
   *
   * Try this parameter if you notice seams or rough edges around the inpainted content.
   *
   * > Note: Excessive growth may obscure fine details in the mask and/or merge nearby masked regions.
   * @min 0
   * @max 100
   * @default 5
   */
  grow_mask?: number;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageEditInpaintCreateData = File;

export type StableImageEditInpaintCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageEditOutpaintCreatePayload {
  /**
   * The image you wish to outpaint.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * - The aspect ratio must be between 1:2.5 and 2.5:1
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * The number of pixels to outpaint on the left side of the image. At least one outpainting direction must be supplied with a non-zero value.
   * @min 0
   * @max 2000
   * @default 0
   */
  left?: number;
  /**
   * The number of pixels to outpaint on the right side of the image. At least one outpainting direction must be supplied with a non-zero value.
   * @min 0
   * @max 2000
   * @default 0
   */
  right?: number;
  /**
   * The number of pixels to outpaint on the top of the image. At least one outpainting direction must be supplied with a non-zero value.
   * @min 0
   * @max 2000
   * @default 0
   */
  up?: number;
  /**
   * The number of pixels to outpaint on the bottom of the image. At least one outpainting direction must be supplied with a non-zero value.
   * @min 0
   * @max 2000
   * @default 0
   */
  down?: number;
  creativity?: Creativity;
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 0
   * @maxLength 10000
   */
  prompt?: string;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'png' | 'jpeg' | 'webp';
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageEditOutpaintCreateData = File;

export type StableImageEditOutpaintCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageEditSearchAndReplaceCreatePayload {
  /**
   * An image containing content you wish to replace.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * - The aspect ratio must be between 1:2.5 and 2.5:1
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * Short description of what to inpaint in the `image`.
   * @maxLength 10000
   * @example "glasses"
   */
  search_prompt: string;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * Grows the edges of the mask outward in all directions by the specified number of pixels. The expanded area around the mask will be blurred, which can help smooth the transition between inpainted content and the original image.
   *
   * Try this parameter if you notice seams or rough edges around the inpainted content.
   *
   * > Note: Excessive growth may obscure fine details in the mask and/or merge nearby masked regions.
   * @min 0
   * @max 20
   * @default 3
   */
  grow_mask?: number;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageEditSearchAndReplaceCreateData = File;

export type StableImageEditSearchAndReplaceCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageEditSearchAndRecolorCreatePayload {
  /**
   * An image containing content you wish to recolor.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * - The aspect ratio must be between 1:2.5 and 2.5:1
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * Short description of what to search for in the `image`.
   * @maxLength 10000
   * @example "glasses"
   */
  select_prompt: string;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * Grows the edges of the mask outward in all directions by the specified number of pixels. The expanded area around the mask will be blurred, which can help smooth the transition between inpainted content and the original image.
   *
   * Try this parameter if you notice seams or rough edges around the inpainted content.
   *
   * > Note: Excessive growth may obscure fine details in the mask and/or merge nearby masked regions.
   * @min 0
   * @max 20
   * @default 3
   */
  grow_mask?: number;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageEditSearchAndRecolorCreateData = File;

export type StableImageEditSearchAndRecolorCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageEditRemoveBackgroundCreatePayload {
  /**
   * The image whose background you wish to remove.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 4,194,304 pixels
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'png' | 'webp';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageEditRemoveBackgroundCreateData = File;

export type StableImageEditRemoveBackgroundCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageEditReplaceBackgroundAndRelightCreatePayload {
  /**
   * An image containing the subject that you wish to change background and relight.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * - The aspect ratio must be between 1:2.5 and 2.5:1
   * @format binary
   * @example "./some/image.png"
   */
  subject_image: File;
  /**
   * An image whose style you wish to use in the background. Similar to the Control: Style API,
   * stylistic elements from this image are added to the background.
   *
   * > **Important:** either `background_reference` or `background_prompt` must be provided.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * @format binary
   * @example "./some/image.png"
   */
  background_reference?: File;
  /**
   * What you wish to see in the background of the output image. This could be a description
   * of the desired background scene, or just a description of the lighting if modifying the
   * light source through `light_source_direction` or `light_reference`.
   *
   * > **Important:** either `background_reference` or `background_prompt` must be provided.
   * @maxLength 10000
   */
  background_prompt?: string;
  /**
   * Description of the subject. Use this to prevent elements of the background from
   * bleeding into the subject. For example, if you find your subject is turning
   * green with a forest in the background, try putting a short description of the
   * subject in this field.
   * @maxLength 10000
   */
  foreground_prompt?: string;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * How much to overlay the original subject to exactly match the original image. A
   * 1.0 is an exact pixel match for the subject, and 0.0 is a close match but will
   * have new lighting qualities. This is an advanced feature.
   * @min 0
   * @max 1
   * @default 0.6
   */
  preserve_original_subject?: number;
  /**
   * Controls the generated background to have the same depth as the original subject image. This is an advanced feature.
   * @min 0
   * @max 1
   * @default 0.5
   */
  original_background_depth?: number;
  /**
   * Whether to keep the background of the original image. When this is on, the background
   * will have different lighting than the original image that changes based on the other
   * parameters in this API.
   * @default "false"
   */
  keep_original_background?: 'true' | 'false';
  /** Direction of the light source. */
  light_source_direction?: 'left' | 'right' | 'above' | 'below';
  /**
   * An image with the desired lighting. Lighter sections of the light_reference image will correspond to sections with brighter lighting in the output image.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * @format binary
   * @example "./some/image.png"
   */
  light_reference?: File;
  /**
   * If using `light_reference_image` or `light_source_direction`, controls the strength
   * of the light source. 1.0 is brighter and 0.0 is dimmer. This is an advanced feature.
   *
   * > **Important:** Use of this parameter requires `light_reference` or `light_source_direction` to be provided.
   * @min 0
   * @max 1
   * @default 0.3
   */
  light_source_strength?: number;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
}

export interface StableImageEditReplaceBackgroundAndRelightCreateData {
  /** The `id` of a generation, typically used for async generations, that can be used to check the status of the generation or retrieve the result. */
  id: GenerationID;
}

export type StableImageEditReplaceBackgroundAndRelightCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageGenerateUltraCreatePayload {
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * Controls the aspect ratio of the generated image.
   * @default "1:1"
   */
  aspect_ratio?: '21:9' | '16:9' | '3:2' | '5:4' | '1:1' | '4:5' | '2:3' | '9:16' | '9:21';
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'jpeg' | 'png' | 'webp';
  /**
   * The image to use as the starting point for the generation.
   *
   * > **Important:** The `strength` parameter is required when `image` is provided.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Width must be between 64 and 16,384 pixels
   * - Height must be between 64 and 16,384 pixels
   * - Total pixel count must be at least 4,096 pixels
   * @format binary
   * @example "./some/image.png"
   */
  image?: File;
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
  /**
   * Sometimes referred to as _denoising_, this parameter controls how much influence the
   * `image` parameter has on the generated image.  A value of 0 would yield an image that
   * is identical to the input.  A value of 1 would be as if you passed in no image at all.
   *
   * > **Important:** This parameter is required when `image` is provided.
   * @min 0
   * @max 1
   */
  strength?: number;
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageGenerateUltraCreateData = File;

export type StableImageGenerateUltraCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageGenerateCoreCreatePayload {
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * Controls the aspect ratio of the generated image.
   * @default "1:1"
   */
  aspect_ratio?: '21:9' | '16:9' | '3:2' | '5:4' | '1:1' | '4:5' | '2:3' | '9:16' | '9:21';
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'png' | 'jpeg' | 'webp';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageGenerateCoreCreateData = File;

export type StableImageGenerateCoreCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageGenerateSd3CreatePayload {
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * GenerationMode
   * Controls whether this is a text-to-image or image-to-image generation, which affects which parameters are required:
   * - **text-to-image** requires only the `prompt` parameter
   * - **image-to-image** requires the `prompt`, `image`, and `strength` parameters
   * @default "text-to-image"
   */
  mode?: 'text-to-image' | 'image-to-image';
  /**
   * The image to use as the starting point for the generation.
   *
   * Supported formats:
   *   - jpeg
   *   - png
   *   - webp
   *
   * Supported dimensions:
   *   - Every side must be at least 64 pixels
   *
   * > **Important:** This parameter is only valid for **image-to-image** requests.
   * @format binary
   */
  image?: File;
  /**
   * Sometimes referred to as _denoising_, this parameter controls how much influence the
   * `image` parameter has on the generated image.  A value of 0 would yield an image that
   * is identical to the input.  A value of 1 would be as if you passed in no image at all.
   *
   * > **Important:** This parameter is only valid for **image-to-image** requests.
   * @min 0
   * @max 1
   */
  strength?: number;
  /**
   * Controls the aspect ratio of the generated image. Defaults to 1:1.
   *
   * > **Important:** This parameter is only valid for **text-to-image** requests.
   * @default "1:1"
   */
  aspect_ratio?: '21:9' | '16:9' | '3:2' | '5:4' | '1:1' | '4:5' | '2:3' | '9:16' | '9:21';
  /**
   * The model to use for generation.
   *
   * - `sd3.5-large` requires 6.5 credits per generation
   * - `sd3.5-large-turbo` requires 4 credits per generation
   * - `sd3.5-medium` requires 3.5 credits per generation
   * - `sd3-large` requires 6.5 credits per generation
   * - `sd3-large-turbo` requires 4 credits per generation
   * - `sd3-medium` requires 3.5 credits per generation
   * @default "sd3.5-large"
   */
  model?: 'sd3.5-large' | 'sd3.5-large-turbo' | 'sd3.5-medium' | 'sd3-medium' | 'sd3-large' | 'sd3-large-turbo';
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'png' | 'jpeg';
  /**
   * Guides the image model towards a particular style.
   *
   * > **Important:** This parameter has no effect on the `sd3-*` models.
   */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
  /**
   * Keywords of what you **do not** wish to see in the output image.
   * This is an advanced feature.
   *
   * > **Important:** This parameter does **not** work with `sd3-large-turbo`.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt).
   * @min 1
   * @max 10
   */
  cfg_scale?: number;
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageGenerateSd3CreateData = File;

export type StableImageGenerateSd3CreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageControlSketchCreatePayload {
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Image Dimensions:
   * - Every side must be at least 64 pixels
   * - The total pixel count cannot exceed 9,437,184 pixels (e.g. 3072x3072, 4096x2304, etc.)
   *
   * Image Aspect Ratio:
   * - Must be between 1:2.5 and 2.5:1 (i.e. cannot be too tall or too wide)
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * How much influence, or control, the `image` has on the generation. Represented as a float between 0 and 1, where 0 is the least influence and 1 is the maximum.
   * @min 0
   * @max 1
   * @default 0.7
   */
  control_strength?: number;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'png' | 'jpeg' | 'webp';
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageControlSketchCreateData = File;

export type StableImageControlSketchCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageControlStructureCreatePayload {
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * An image whose structure you wish to use as the foundation for a generation.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * - The aspect ratio must be between 1:2.5 and 2.5:1
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * How much influence, or control, the `image` has on the generation. Represented as a float between 0 and 1, where 0 is the least influence and 1 is the maximum.
   * @min 0
   * @max 1
   * @default 0.7
   */
  control_strength?: number;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'png' | 'jpeg' | 'webp';
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageControlStructureCreateData = File;

export type StableImageControlStructureCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export interface StableImageControlStyleCreatePayload {
  /**
   * What you wish to see in the output image. A strong, descriptive prompt that clearly defines
   * elements, colors, and subjects will lead to better results.
   *
   * To control the weight of a given word use the format `(word:weight)`,
   * where `word` is the word you'd like to control the weight of and `weight`
   * is a value between 0 and 1. For example: `The sky was a crisp (blue:0.3) and (green:0.8)`
   * would convey a sky that was blue and green, but more green than blue.
   * @minLength 1
   * @maxLength 10000
   */
  prompt: string;
  /**
   * An image whose style you wish to use as the foundation for a generation.
   *
   * Supported Formats:
   * - jpeg
   * - png
   * - webp
   *
   * Validation Rules:
   * - Every side must be at least 64 pixels
   * - Total pixel count must be between 4,096 and 9,437,184 pixels
   * - The aspect ratio must be between 1:2.5 and 2.5:1
   * @format binary
   * @example "./some/image.png"
   */
  image: File;
  /**
   * A blurb of text describing what you **do not** wish to see in the output image.
   * This is an advanced feature.
   * @maxLength 10000
   */
  negative_prompt?: string;
  /**
   * Controls the aspect ratio of the generated image.
   * @default "1:1"
   */
  aspect_ratio?: '21:9' | '16:9' | '3:2' | '5:4' | '1:1' | '4:5' | '2:3' | '9:16' | '9:21';
  /**
   * How closely the output image's style resembles the input image's style.
   * @min 0
   * @max 1
   * @default 0.5
   */
  fidelity?: number;
  /**
   * A specific value that is used to guide the 'randomness' of the generation. (Omit this parameter or pass `0` to use a random seed.)
   * @min 0
   * @max 4294967294
   * @default 0
   */
  seed?: number;
  /**
   * Dictates the `content-type` of the generated image.
   * @default "png"
   */
  output_format?: 'png' | 'jpeg' | 'webp';
  /** Guides the image model towards a particular style. */
  style_preset?:
    | 'enhance'
    | 'anime'
    | 'photographic'
    | 'digital-art'
    | 'comic-book'
    | 'fantasy-art'
    | 'line-art'
    | 'analog-film'
    | 'neon-punk'
    | 'isometric'
    | 'low-poly'
    | 'origami'
    | 'modeling-compound'
    | 'cinematic'
    | '3d-model'
    | 'pixel-art'
    | 'tile-texture';
}

/**
 * The bytes of the generated image.
 *
 * The `finish-reason` and `seed` will be present as headers.
 * @format binary
 */
export type StableImageControlStyleCreateData = File;

export type StableImageControlStyleCreateError =
  | {
      /**
       * A unique identifier associated with this error. Please include this in any [support tickets](https://stabilityplatform.freshdesk.com/support/tickets/new)
       * you file, as it will greatly assist us in diagnosing the root cause of the problem.
       * @minLength 1
       * @example "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
       */
      id: string;
      /**
       * Short-hand name for an error, useful for discriminating between errors with the same status code.
       * @minLength 1
       * @example "bad_request"
       */
      name: string;
      /**
       * One or more error messages indicating what went wrong.
       * @minItems 1
       * @example ["some-field: is required"]
       */
      errors: string[];
    }
  | ContentModerationResponse;

export type ListEnginesData = ListEnginesResponseBody;

export type UserAccountData = AccountResponseBody;

export type UserBalanceData = BalanceResponseBody;

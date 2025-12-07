export const allowedAspectRatios = ["16/9", "4/3", "1/1", "3/4", "5/1"] as const;
export type AllowedAspectRatio = (typeof allowedAspectRatios)[number];

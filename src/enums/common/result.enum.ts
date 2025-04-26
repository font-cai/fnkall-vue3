/**
 * 响应码枚举
 */
export const enum ResultCode {
  /**
   * 成功
   */
  SUCCESS = 1,
  /**
   * 错误
   */
  ERROR0,

  /**
   * 访问令牌无效或过期
   */
  ACCESS_TOKEN_INVALID = 4001,

  /**
   * 刷新令牌无效或过期
   */
  REFRESH_TOKEN_INVALID = 4002,
}

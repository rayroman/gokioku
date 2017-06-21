/**
 * Created by rroman681 on 6/21/17.
 * Config for host name
 */

const dev = process.env.NODE_ENV !== "production";
export const host = dev ? "http://localhost:5000" : "http://gokioku.herokuapp.com";
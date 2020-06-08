import axios, {AxiosRequestConfig} from 'axios';
import {PluginObject, VueConstructor} from 'Vue';

import {API, ApiObject, AppConfig} from '../../../types';
import APiProxy from '../api-proxy';


const apiProxy = (apiObject: ApiObject, config: AppConfig,
                  axiosConfig?: AxiosRequestConfig): ApiObject<API> => {
  axios.defaults.baseURL = config.basePath;
  const apiProxy: ApiObject<API> = APiProxy(apiObject, config, axiosConfig || {});
  const plugin: PluginObject<any> = {
    installed: false,
    install: (vue: VueConstructor) => {
      if (plugin.installed) {
        return;
      }
      if (!vue.prototype.$api) {
        Object.defineProperties(vue.prototype, {
          $api: {
            get() {
              return apiProxy;
            }
          }
        });
      }
    }
  };
  return apiProxy;
};

export default {
  proxyAPI: apiProxy
};

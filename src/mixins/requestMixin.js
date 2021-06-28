import { getAuthorization, request } from '@/utils/requests'

export const requestMixin = {
  methods: {
    getAuthorization,
    request,
  },
}

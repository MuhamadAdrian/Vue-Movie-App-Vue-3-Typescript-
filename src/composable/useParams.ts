import { computed, reactive } from 'vue'
import router from '@/router'

const routeData = reactive({
    params: {},
    query: {}
})

router.afterEach(route => {
    routeData.params = route.params;
    routeData.query = route.query
});

export function useParams(){
    return computed(() => routeData.params);
}
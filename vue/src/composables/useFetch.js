import { isRef, ref, unref, watch } from 'vue';

export function useFetch(url) {
  const data = ref([]);
  const loading = ref(false);

  const fetcher = async () => {
    await new Promise(res => setTimeout(res, 500));

    return await (await fetch(unref(url))).json();
  };

  watch(
    () => (isRef(url) ? url.value : url),
    () => {
      loading.value = true;
      fetcher().then(res => {
        loading.value = false;
        data.value = res;
      });
    },
    { immediate: true }
  );

  return { data, loading };
}

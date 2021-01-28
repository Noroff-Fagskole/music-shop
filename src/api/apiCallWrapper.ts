interface ResultObject {
  success: boolean;
  error: null;
  data: null;
}

export async function apiCallWrapper(callback: Function): Promise<ResultObject> {
  const result = { success: false, error: null, data: null };
  try {
    result.data = await callback();
    result.success = true;
  }
  catch (err) {
    result.error = err;
  }

  return result;
}

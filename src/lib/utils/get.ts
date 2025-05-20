export async function getArticleData(
  articleCategory: string,
  article: string
): Promise<any> {
  try {
    const articleModule = await import(
      `@/lib/constants/articles/${articleCategory}`
    );
    // Return the specific named export that matches toolKitID
    if (articleModule[article]) {
      return articleModule[article];
    } else {
      console.error(`Export named ${article} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}

export async function getResourceData(
  resourceCategory: string,
  resource: string
): Promise<any> {
  try {
    const resourceModule = await import(
      `@/lib/constants/resources/${resourceCategory}`
    );
    // Return the specific named export that matches toolKitID
    if (resourceModule[resource]) {
      return resourceModule[resource];
    } else {
      console.error(`Export named ${resource} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}
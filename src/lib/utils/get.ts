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

export async function getStoryData(
  id: string,
  camelCaseId: string
): Promise<any> {
  try {
    const storyModule = await import(`@/lib/constants/events/stories/${id}`);
    // Return the specific named export that matches toolKitID
    if (storyModule[camelCaseId]) {
      return storyModule[camelCaseId];
    } else {
      console.error(`Export named ${camelCaseId} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}
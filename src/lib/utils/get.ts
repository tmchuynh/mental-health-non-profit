export async function getArticleData(
  articleCategory: string,
  article: string
): Promise<any> {
  try {
    const toolModule = await import(
      `@/lib/constants/articles/${articleCategory}`
    );
    // Return the specific named export that matches toolKitID
    if (toolModule[article]) {
      return toolModule[article];
    } else {
      console.error(`Export named ${article} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}
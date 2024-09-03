import { Separator } from "@/components/ui/separator";
import PageTitle from "../../_components/PageTitle";
import CreateCategory from "../../_components/blogCategory/CreateCategory";
import { getCategories } from "../../_actions/blogCategoryActions";
import { BlogCategoryTable } from "../../_components/tables/blog/blogCategoryTable";
import { Suspense } from "react";
import Loading from "../../loading";

export default async function page() {
    const allCategories = await getCategories();
    const categories = JSON.parse(allCategories);

    return (
        <Suspense fallback={<Loading />}>
            <div className="bg-color-grey">
                <div className="flex justify-between items-center">
                    <PageTitle title="Blog category" />
                    <CreateCategory />
                </div>
                <Separator className="my-4" />
                <BlogCategoryTable categories={categories} />
            </div>
        </Suspense>
    )
}
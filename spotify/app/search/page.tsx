import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/app/(site)/components/SearchInput";
import './styles.css';
import SearchContent from "@/app/search/components/SearchContent";
export const revalidate=0;
interface SearchProps {
    searchParams: {
        title: string;
    }
};

const Search = async ({searchParams}: SearchProps) => {
    const songs = await getSongsByTitle(searchParams.title);
    return (
        <div
            style = {{backgroundColor: 'rgba(248,211,197,255)' }}
            className="
                rounded-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto">
            <Header
                className="bg-custom-color"
            >
                <div className="mb-2 flex flex-col gap-y-6">
                    <SearchInput />
                </div>
            </Header>
            <SearchContent songs={songs}/>
        </div>
    )
}

export default Search;
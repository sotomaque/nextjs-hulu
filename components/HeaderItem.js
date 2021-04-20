import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

const IconMap = {
  HOME: () => <HomeIcon className="h-8 mb-1 group-hover:animate-bounce" />,
  TRENDING: () => (
    <LightningBoltIcon className="h-8 mb-1 group-hover:animate-bounce" />
  ),
  VERIFIED: () => (
    <BadgeCheckIcon className="h-8 mb-1 group-hover:animate-bounce" />
  ),
  COLLECTIONS: () => (
    <CollectionIcon className="h-8 mb-1 group-hover:animate-bounce" />
  ),
  SEARCH: () => <SearchIcon className="h-8 mb-1 group-hover:animate-bounce" />,
  ACCOUNT: () => <UserIcon className="h-8 mb-1 group-hover:animate-bounce" />,
};

function HeaderItem({ title }) {
  const Icon = IconMap[title];

  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20">
      <Icon />
      <p className="opacity-0 group-hover:opacity-100 hover:text-white tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;

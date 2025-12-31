import { type PageHeaderProps } from './interfaces/PageHeader.interface';

function PageHeader({ icon: Icon, title, className = "" }: PageHeaderProps) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <Icon className="text-primary" size={24} />
      <h1 className="text-2xl md:text-3xl font-bold text-base-content">
        {title}
      </h1>
    </div>
  );
}

export default PageHeader;

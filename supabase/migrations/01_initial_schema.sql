-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist
DROP TABLE IF EXISTS public.settings CASCADE;
DROP TABLE IF EXISTS public.slides CASCADE;
DROP TABLE IF EXISTS public.reference_companies CASCADE;
DROP TABLE IF EXISTS public.about CASCADE;
DROP TABLE IF EXISTS public.features CASCADE;
DROP TABLE IF EXISTS public.projects CASCADE;
DROP TABLE IF EXISTS public.services CASCADE;
DROP TABLE IF EXISTS public.testimonials CASCADE;
DROP TABLE IF EXISTS public.contact CASCADE;

-- Settings table
CREATE TABLE public.settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    theme VARCHAR(50) DEFAULT 'blue',
    maintenance_mode BOOLEAN DEFAULT false,
    maintenance_message TEXT,
    footer_content JSONB DEFAULT '{}',
    social_media JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Slides table
CREATE TABLE public.slides (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255),
    description TEXT,
    image_url TEXT,
    order_no INTEGER,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reference companies table
CREATE TABLE public.reference_companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255),
    logo_url TEXT,
    website_url TEXT,
    order_no INTEGER,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- About table
CREATE TABLE public.about (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255),
    content TEXT,
    description TEXT,
    image_url TEXT,
    features JSONB DEFAULT '[]',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Features table
CREATE TABLE public.features (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255),
    description TEXT,
    icon TEXT,
    order_no INTEGER,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects table
CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255),
    description TEXT,
    image_url TEXT,
    category VARCHAR(100),
    is_featured BOOLEAN DEFAULT false,
    order_no INTEGER,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services table
CREATE TABLE public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255),
    description TEXT,
    icon TEXT,
    details TEXT,
    order_no INTEGER,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE public.testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255),
    position VARCHAR(255),
    company VARCHAR(255),
    content TEXT,
    image_url TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    order_no INTEGER,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact table
CREATE TABLE public.contact (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    address TEXT,
    phone VARCHAR(50),
    email VARCHAR(255),
    google_maps_url TEXT,
    social_media JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert initial data
INSERT INTO public.settings (theme, maintenance_mode, maintenance_message, footer_content, social_media)
VALUES ('blue', false, null, '{}', '{}');

INSERT INTO public.about (title, content, description, features)
VALUES ('Hakkımızda', 'Şirket hakkında genel bilgi buraya gelecek.', 'Kısa açıklama', '[]');

INSERT INTO public.contact (address, phone, email, social_media)
VALUES ('Örnek Adres', '+90 123 456 7890', 'info@example.com', '{}');

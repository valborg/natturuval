import React from 'react';

// Safe component for rendering structured text content
const StructuredText = ({ content }) => {
    if (typeof content === 'string') {
        return <span>{content}</span>;
    }

    if (Array.isArray(content)) {
        return (
            <>
                {content.map((item, index) => (
                    <StructuredText key={index} content={item} />
                ))}
            </>
        );
    }

    if (content?.type === 'paragraph') {
        return <p className={content.className || ''}>{content.text}</p>;
    }

    if (content?.type === 'strong') {
        return <strong className={content.className || ''}>{content.text}</strong>;
    }

    if (content?.type === 'em') {
        return <em className={content.className || ''}>{content.text}</em>;
    }

    if (content?.type === 'list') {
        const ListComponent = content.ordered ? 'ol' : 'ul';
        return (
            <ListComponent className={content.className || ''}>
                {content.items.map((item, index) => (
                    <li key={index}>
                        <StructuredText content={item} />
                    </li>
                ))}
            </ListComponent>
        );
    }

    if (content?.type === 'section') {
        return (
            <div className={content.className || ''}>
                {content.title && <h6>{content.title}</h6>}
                <StructuredText content={content.content} />
            </div>
        );
    }

    // Fallback for objects with mixed content
    if (typeof content === 'object' && content !== null) {
        return (
            <div>
                {Object.entries(content).map(([key, value]) => (
                    <div key={key} className="mb-3">
                        <strong>{key}: </strong>
                        <StructuredText content={value} />
                    </div>
                ))}
            </div>
        );
    }

    return null;
};

export default StructuredText;
